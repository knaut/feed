import Moment from 'moment';
import generate from 'nanoid/generate';
import * as blockstack from 'blockstack';

// UTILS
import toType from '../utils/toType';

class Model {
  /*
    our model is a base class that our data entities inherit from
  */
  constructor() {
    this.id = this.generateId();
    // props are the content properties for our model that we save to the cache
    this.props = {};

    this.isSaved = false;
  }

  generateId() {
    const idChars = `123456789abcdefhijklmnopqrstuvwxyz`;
    const idLimit = 20;

    return generate(idChars, idLimit);
  }

  getCache() {
    return new Promise((resolve, reject) => {
      switch(process.env.STORAGE) {
        case 'LOCAL': {
          fetch('/api/cache', {
            method: 'GET',
          })
          .then(res => res.json())
          .then(json => {
            console.log(`${this.constructor.name} successfully got cache from LOCAL.`)
            resolve(json);
          })
          .catch(error => {
            console.error(`${this.constructor.name} called getCache to LOCAL, but it failed.`)
            reject(error);
          });
        }
        case 'GAIA': {

          blockstack.getFile(
            `cache.json`,
            { decrypt: false }
          ).then((content) => {
            resolve(content);
          })

        }
      }
    })
  }

  putCache(cache) {
    return new Promise((resolve, reject) => {
      switch(process.env.STORAGE) {
        case 'LOCAL': {
          fetch('/api/cache', {
            method: 'POST',
            body: JSON.stringify(cache)
          })
          .then(res => res.json())
          .then(json => {
            console.log(`${this.constructor.name} successfully got cache from LOCAL.`)
            resolve(json);
          })
          .catch(error => {
            console.error(`${this.constructor.name} called getCache to LOCAL, but it failed.`)
            reject(error);
          });
        }
        case 'GAIA': {
          const options = { encrypt: false };
          const json = JSON.stringify(cache);
          blockstack.putFile(
            'cache.json',
            json,
            options
          ).then(res => {
            console.log('Gaia responded:', res);
            resolve(res);
          }).catch(error => {
            console.error('Failed to putFile on Gaia.', error);
            reject(error);
          });
        }
      }

    });
  }

  getProps() {
    const props = {
      id: this.id,
      ...this.props
    };

    return {
      id: this.id,
      props: this.props,
      isSaved: this.isSaved,
    }
  }

  setProps(cache, props) {
    
  }

}

export default Model;