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
  constructor(props, fetched) {
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
    const { id } = this;

    try {

      const cache = await Model.getCache();
      const options = { encrypt: false };

      this.isSaved = true

      const model = this.getProps()

      cache.Profile.entities[ model.id ] = model
      cache.Profile.ids.push( model.id )

      const res = await Model.putCache( cache )

      return this

    } catch (error) {
    
      this.isSaved = false
      console.error(error, this)

      return this
    }

  }
  

  async load() {
    const { id } = this;

    try {
      const cache = await Model.getCache();
      const entity = cache.Profile.entities[ id ]

      if (entity) {
        return entity;
      } else {
        return false
      }

    } catch (error) {
      console.error(error, this)
      return false
    }
  }

  // async delete() {
  //   const { id } = this

  //   try {
  //     const cache = await Model.getCache()
  //     const options = { encrypt: false }
  //     const model = this.getProps()

      
  //   }
  // }

}

export default Profile;