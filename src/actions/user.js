// IMPORTS
// MODELS
import Profile from '../models/Profile';

// TYPES
export const IS_SIGNED_IN = 'IS_SIGNED_IN';
export const IS_SIGNED_IN_PENDING = 'IS_SIGNED_IN_PENDING';
export const IS_NOT_SIGNED_IN = 'IS_NOT_SIGNED_IN';

export const INITIAL_SIGN_IN = 'INITIAL_SIGN_IN';
export const INITIAL_SIGN_IN_SUCCESS = 'INITIAL_SIGN_IN_SUCCESS';
export const INITIAL_SIGN_IN_FAIL = 'INITIAL_SIGN_IN_FAIL';

export const USER_LOAD_PENDING = 'USER_LOAD_PENDING'
export const USER_LOAD_SUCCESS = 'USER_LOAD_SUCCESS'
export const USER_LOAD_FAIL = 'USER_LOAD_FAIL'

// CREATORS
export function isSignedIn( payload ) {
  return {
    type: IS_SIGNED_IN,
    payload
  }
}

export function isNotSignedIn( payload ) {
  return {
    type: IS_NOT_SIGNED_IN,
    payload
  }
}

export function initialSignInSuccess( payload ) {
  return {
    type: INITIAL_SIGN_IN_SUCCESS,
    payload
  }
}

export function userLoadPending() {
  return {
    type: USER_LOAD_PENDING,
    payload: true
  }
}

export function userLoadFail( payload ) {
  return {
    type: USER_LOAD_FAIL,
    payload
  }
}

export function userLoadSuccess( payload ) {
  return {
    type: USER_LOAD_SUCCESS,
    payload
  }
}

// THUNKS
export function initialSignIn( payload ) {
  /*
    the first time a user signs into feed, we
    save their profile in the cache
  */
  return async function(dispatch) {
    const {
      username
    } = payload;

    const profile = new Profile({
      username
    });

    try {

      await profile.save();

      dispatch(
        initialSignInSuccess({
          username
        })
      );
      
    } catch (error) {
     
      console.error(error);

    }
    
  }
}

// load a user, merging their information from our cache and their profile on blockstack
export function loadUser( payload ) {
  return async function( dispatch ) {
    dispatch( 
      userLoadPending()
    )

    const { username } = payload
    const profile = new Profile({
      username
    });

    try {
      const blockstackUser = await blockstack.lookupProfile(`${username}.id.blockstack`)
        
      const name = blockstackUser.name
      const description = blockstackUser.description
      const image = blockstackUser.image[0].contentUrl

      const result = {
        [username]: {
          profile: false,
          blockstack: {
            name,
            username,
            description,
            image
          }
        }
      }

      const entity = await profile.load()

      if (entity) {
        // assign our cached profile to our user
        result[username].profile = entity
      }

      dispatch(
        userLoadSuccess(result)
      )

    } catch (error) {
      console.error(error)

      dispatch(
        userLoadFail(username)
      )
    }
  }
}


