// UTILS
import id from '../../utils/id';
import toType from '../../utils/toType';

class Status {
  /*
    a status is a textual post limited to 500 characters.
  */

  constructor(input) {
    const id = id();
    const textLimit = 500;
    
    // our text is our input. isValid is our determination whether it's "really" a status.
    let text = null;
    let isValid = null;

    const inputType = toType(input);

    if (inputType !== 'string') {
      console.error(`Status constructor was given input text that wasn't a string.`, input);
      isValid = false;
      return {
        id,
        text,
        isValid
      };
    } else {

      if (input.length > textLimit) {
        console.error(`Status constructor was given input text that was too long.`, input);
        isValid = false;
        text = input;
        
        return {
          id,
          text,
          isValid
        }
      } else {
        console.log(`Valid Status.`, input);
        isValid = true;
        text = input;

        return {
          id,
          text,
          isValid
        }
      }

    }
  }
}

export default Status;