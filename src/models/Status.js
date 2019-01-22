import Moment from 'moment';
import * as blockstack from 'blockstack';

import Model from './Model';

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

    const { id, isValid } = this;

    if (isValid === true) {
      console.log(this)
      try {
        
        const cache = await this.getCache();
        const options = { encrypt: false };

        this.isSaved = true;
        
        const model = this.getProps();

        cache.Status.entities[ model.id ] = model;
        cache.Status.ids.push( model.id );
        console.log({cache})
        const res = await this.putCache( cache );
        console.log({res})
        return this;

      } catch (error) {
        
        this.isSaved = false;
        console.error(error, this);
        return this;
      }
    } else {
      console.error('Could not save Status; model is invalid.', id);
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