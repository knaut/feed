import Moment from 'moment'
import generate from 'nanoid/generate'
import * as blockstack from 'blockstack'

// UTILS
import toType from '../utils/toType'

// ENV
const DEBUG = process.env.DEBUG

class Cache {
  /*
    our model is a base class that our data entities inherit from
  */
  constructor (props, fetched) {
    const isLoaded = !!fetched

    this.id = isLoaded === true ? props.id : this.generateId()

    // props are the content properties for our model that we save to the cache
    this.props = props

    // "is" is a special namespace for model-only variables, usually
    // related to the model's status. they are not props that should be
    // saved to the cache
    this.isValid = isLoaded === true ? true : null
    this.isSaved = isLoaded === true
    this.isLoaded = isLoaded
  }

  generateId () {
    const idChars = `123456789abcdefhijklmnopqrstuvwxyz`
    const idLimit = 32

    return generate(idChars, idLimit)
  }

  getProps () {
    /*
      delivers this model's entity props
      which should be expected to save to the cache
    */
    return {
      id: this.id,
      ...this.props
    }
  }

  static loadById (id, substate) {
    return new Promise(async (resolve, reject) => {
      const cache = await this.getCache()
      const entity = substate.entities[ id ]

      return resolve(new this(entity, true))
    })
  }

  static startCache (profile) {
    if (DEBUG) {
      console.log('Attempting to start user cache.')
    }

    return new Promise((resolve, reject) => {
      switch (process.env.STORAGE) {
        case 'LOCAL': {
          console.error('Method unimplemented!')
        }
        case 'GAIA': {
          const userSession = new blockstack.UserSession()

          const blankCache = JSON.stringify({
            Status: {
              entities: {},
              ids: []
            }
          })

          userSession.putFile(
            `cache.json`,
            blankCache,
            { encrypt: false }
          ).catch(error => {
            if (DEBUG) {
              console.error(`${this.constructor.name} called startCache to GAIA, but it failed.`)
            }
            reject(error)
          })
        }
      }
    })
  }

  static getCache () {
    if (DEBUG) {
      console.log('Attempting to fetch cache.')
    }

    return new Promise((resolve, reject) => {
      switch (process.env.STORAGE) {
        case 'LOCAL': {
          fetch('/api/cache', {
            method: 'GET'
          })
            .then(res => res.json())
            .then(json => {
              if (DEBUG) {
                console.log(`${this.constructor.name} successfully got cache from LOCAL.`)
              }
              resolve(json)
            })
            .catch(error => {
              if (DEBUG) {
                console.error(`${this.constructor.name} called getCache to LOCAL, but it failed.`)
              }
              reject(error)
            })
        }
          break
        case 'GAIA': {
          const userSession = new blockstack.UserSession()

          userSession.getFile(
            `cache.json`,
            { decrypt: false }
          ).then(content => {
            resolve(JSON.parse(content))
          }).catch(error => {
            if (DEBUG) {
              console.error(`${this.constructor.name} called getCache to GAIA, but it failed.`)
            }
            reject(error)
          })
        }
          break
      }
    })
  }

  static putCache (cache) {
    if (DEBUG) {
      console.log('Attempting to put cache.', cache)
    }

    const string = JSON.stringify(cache)

    return new Promise((resolve, reject) => {
      switch (process.env.STORAGE) {
        case 'LOCAL': {
          fetch('/api/cache', {
            method: 'POST',
            body: string
          })
            .then(res => {
              console.log(`${this.constructor.name} successfully POSTed cache to LOCAL.`)
            })
            .catch(error => {
              if (DEBUG) {
                console.error(`${this.constructor.name} POSTed to LOCAL, but it failed.`)
              }
              reject(error)
            })
        }
          break
        case 'GAIA': {
          const userSession = new blockstack.UserSession()

          userSession.putFile(
            `cache.json`,
            string,
            { encrypt: false }
          ).then(res => {
            console.log('Gaia responded:', res)
          })
            .catch(error => {
              if (DEBUG) {
                console.error(error)
              }
              reject(error)
            })
        }
          break
      }
    })
  }
}

export default Model
