import Moment from 'moment';
import * as blockstack from 'blockstack';
import Model from './Model';

// UTILS
import toType from '../utils/toType';

class Profile extends Model {
  /*
    feed profiles are used to build a searchable directory of feed users.
    we piggyback off of their blockstack username.
  */
  constructor(props) {
    super();

    const { username } = props;

    // overrule our usually generated id
    this.id = username;

    // set initial props
    this.props = {
      Status: []
    }
  }

  async save() {
    const props = this.getCachableProps();

    try {
      const cache = await this.getCache();
      // console.log(cache);

      if ( !cache.Profile.entities.hasOwnProperty( props.id ) ) {
        cache.Profile.entities[ props.id ] = props;
        cache.Profile.ids.push( props.id );

        this.putCache( cache );
      }

    } catch (error) {
      console.error(error);
    }
  }

}

export default Profile;