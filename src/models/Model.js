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
    this.STORAGE = process.env.STORAGE;
    this.id = this.generateId();
  }

  generateId() {
    const idChars = `123456789abcdefhijklmnopqrstuvwxyz`;
    const idLimit = 20;

    return generate(idChars, idLimit);
  }
}

export default Model;