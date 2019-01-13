import Moment from 'moment';
import * as blockstack from 'blockstack';

import Model from './model';

// UTILS
import generateId from '../utils/generateId';
import toType from '../utils/toType';

class Status extends Model {
  /*
    a status is a textual post limited to 500 characters.
  */
  constructor(props) {
    super();

    // isValid is our determination whether it's "really" a status.
    let isValid = null;

    if (props.text) {
      const { text } = props;
      const textLimit = 500;
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

        }

      }

      timestamp = Moment().toISOString();
      
      this.props = {
        text: props.text,
        timestamp,

        Profile: props.Profile
      };

      this.isValid = isValid;

    } else {
      console.error(`Status constructor expected object with key "text", was given:`, props);
    }

  }

  async save() {
    /*
      our save method handles "putting" our model on gaia storage.
      it also runs any validations before saving in case the model is invalid.
    */
    const { id } = this;
    if (this.isValid === true) {
      console.log('Saving model to Gaia.', id);

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

  async delete() {
    /*
      delete parses our file on gaia storage, then removes this model
    */
    const { id } = this;
    console.log('Deleting model on Gaia.', id);
    
    try {
      const string = await this.getCache();
      const cache = JSON.parse(string);
      const options = { encrypt: false };

      // console.log('delete', cache, id);

      delete cache.posts[id];

      cache.ids.splice(
        cache.ids.indexOf(id),
        1
      );

      const json = JSON.stringify(cache);

      const res = await blockstack.putFile(
        `cache.json`,
        json,
        options
      );
      console.log('Gaia responded:', res);
      return this;

    } catch (error) {
      console.error(error, this);
      return this;
    }

  }
}

export default Status;