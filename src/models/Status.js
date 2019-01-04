// UTILS
import generateId from '../utils/generateId';
import toType from '../utils/toType';

class Status {
  /*
    a status is a textual post limited to 500 characters.
  */

  constructor(input) {
    const id = generateId();
    const textLimit = 500;
    
    // our text is our input. isValid is our determination whether it's "really" a status.
    let text = null;
    let isValid = null;

    const inputType = toType(input);

    if (inputType !== 'string') {
      console.error(`Status constructor was given input text that wasn't a string.`, input);
      isValid = false;
      
      this.id = id;
      this.text = text;
      this.isValid = isValid;
      
    } else {

      if (input.length > textLimit) {
        console.error(`Status constructor was given input text that was too long.`);
        isValid = false;
        text = input;
        
        this.id = id;
        this.text = text;
        this.isValid = isValid;
        
      } else {
        console.log(`Constructed valid Status.`);
        isValid = true;
        text = input;

        this.id = id;
        this.text = text;
        this.isValid = isValid;
      }

    }
  }

  save() {
    /*
      our save method handles "putting" our model on gaia storage.
      it also runs any validations before saving in case the model is invalid.
    */
    if (this.isValid === true) {
      console.log('Simulating model save on Gaia.', this);
    } else {
      console.error('Could not save Status to Gaia; model is invalid.', this);
    }
  }
}

export default Status;