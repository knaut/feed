import Moment from 'moment';
import * as blockstack from 'blockstack';

// UTILS
import toType from '../utils/toType';

class Profile extends Model {
  /*
    feed profiles are used to build a searchable directory of feed users.
    we piggyback off of their blockstack username.
  */
  constructor() {
    super();
    
  }

}

export default Profile;