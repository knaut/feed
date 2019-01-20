// IMPORTS
// MODELS
import Profile from '../models/Profile';

// TYPES
export const IS_SIGNED_IN = 'IS_SIGNED_IN';
export const IS_SIGNED_IN_PENDING = 'IS_SIGNED_IN_PENDING';
export const IS_NOT_SIGNED_IN = 'IS_NOT_SIGNED_IN';

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

// THUNKS
export function initialSignIn( payload ) {
  /*
    the first time a user signs into feed, we
    save their profile in the cache
  */
  return function(dispatch) {
    const {
      username
    } = payload;

    const profile = new Profile({
      username
    });

    console.log('initialSignIn', profile);
  }
}