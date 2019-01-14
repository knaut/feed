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

    // "is" is a special namespace for model-only variables, usually
    // related to the model's status. they are not props that should be
    // saved to the cache
    this.isValid = null;
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
            resolve(JSON.parse(content));
          }).catch(error => {
            console.error(`${this.constructor.name} called getCache to GAIA, but it failed.`)
            reject(error);
          });

        }
      }
    })
  }

  getCachableProps() {
    /*
      delivers this model's entity props
      which should be expected to save to the cache
    */
    return {
      id: this.id,
      ...this.props
    };
  }

  async save() {
    try {
      const cache = await this.getCache();
      console.log(cache);
    } catch (error) {
      console.error(error);
    }
  }

}

export default Model;