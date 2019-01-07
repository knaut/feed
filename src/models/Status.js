import Moment from 'moment';
import * as blockstack from 'blockstack';

// UTILS
import generateId from '../utils/generateId';
import toType from '../utils/toType';


class Status {
  /*
    a status is a textual post limited to 500 characters.
  */

  constructor(props) {

    if (props.id && toType(props.id) === 'string') {
      // we were handed an id; expect to load this model
      this.id = props.id;

      // all our other properties are unset until we load
      this.isValid = null;
      this.isSaved = null;
      this.timestamp = null;

    } else if (props.text) {
      // we were handed no id, but text content; expect to save this new instance
      const id = generateId();
      const textLimit = 500;
      const { text } = props;
      
      // isValid is our determination whether it's "really" a status.
      let isValid = null;
      let isSaved = false;
      let timestamp = null;

      const textType = toType(text);

      if (textType !== 'string') {
        console.error(`Status constructor was given text that wasn't a string.`, text);
        isValid = false;
        
      } else {

        if (text.length > textLimit) {
          console.error(`Status constructor was given text that was too long.`);
          isValid = false;

        } else if (text.length === 0) {
          console.error(`Status constructor was given blank text.`);
          isValid = false;
          
        } else {
          console.log(`Constructed valid Status.`);
          isValid = true;
          timestamp = Moment().toISOString();

        }

      }
      
      this.id = id;
      this.text = text;
      this.isValid = isValid;
      this.timestamp = timestamp;
    }
    
  }

  getCache() {
    return new Promise((resolve, reject) => {
      blockstack.getFile(
        `cache.json`,
        { decrypt: false }
      ).then((content) => {
        resolve(content);
      })
    })
  }

  getProps() {
    return {
      id: this.id,
      text: this.text,
      isValid: this.isValid,
      isSaved: this.isSaved,
      timestamp: this.timestamp
    }
  }

  async load() {
    /*
      our load method handles getting and parsing our file
      holding our model data on gaia storage.
    */
    try {
      const cache = await this.getCache();
      console.log(cache);
      const { id } = this;
      console.log('Simulating model load on Gaia.', id);

      return this;
    } catch (error) {
      console.error(error);
      return false;
    }

  }

  async save() {
    /*
      our save method handles "putting" our model on gaia storage.
      it also runs any validations before saving in case the model is invalid.
    */
    const { id } = this;
    if (this.isValid === true) {
      console.log('Simulating model save on Gaia.', id);

      try {

        const string = await this.getCache();
        const cache = JSON.parse(string);
        
        this.isSaved = true;

        const options = { encrypt: false };
        const model = this.getProps();

        cache.posts[ model.id ] = model;
        cache.ids.splice(0, 0, model.id);

        const json = JSON.stringify(cache);

        const res = await blockstack.putFile(
          `cache.json`,
          json,
          options
        );

        console.log('Gaia responded:', res);

        return this;

      } catch (error) {
        this.isSaved = false;
        console.error(error, this);
        return this;
      }
      
      
    } else {
      throw ('Could not save Status to Gaia; model is invalid.', id);
    }
  }

  delete() {
    /*
      delete parses our file on gaia storage, then removes this model
    */
    const { id } = this;
    console.log('Simulating model delete on Gaia.', id);
    return this;
  }
}

export default Status;