import Moment from 'moment';

// UTILS
import generateId from '../utils/generateId';
import toType from '../utils/toType';

class Status {
  /*
    a status is a textual post limited to 500 characters.
  */

  constructor(text) {
    const id = generateId();
    const textLimit = 500;
    
    // isValid is our determination whether it's "really" a status.
    let isValid = null;
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
        console.error(`Status constructor was given text blank.`);
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

  save() {
    /*
      our save method handles "putting" our model on gaia storage.
      it also runs any validations before saving in case the model is invalid.
    */
    if (this.isValid === true) {
      console.log('Simulating model save on Gaia.', this);

      return this;
      
    } else {
      throw ('Could not save Status to Gaia; model is invalid.', this);
    }
  }
}

export default Status;