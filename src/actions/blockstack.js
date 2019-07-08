// TYPES
// checking state of blockstack auth
export const IS_SIGNED_IN = 'IS_SIGNED_IN'
export const IS_SIGNED_IN_PENDING = 'IS_SIGNED_IN_PENDING'
export const IS_NOT_SIGNED_IN = 'IS_NOT_SIGNED_IN'

// first time a user logs into Feed
export const INITIAL_SIGN_IN_PENDING = 'INITIAL_SIGN_IN_PENDING'
export const INITIAL_SIGN_IN_SUCCESS = 'INITIAL_SIGN_IN_SUCCESS'
export const INITIAL_SIGN_IN_FAIL = 'INITIAL_SIGN_IN_FAIL'

// CREATORS
export function isSignedIn (payload) {
  return {
    type: IS_SIGNED_IN,
    payload
  }
}

export function isNotSignedIn (payload) {
  return {
    type: IS_NOT_SIGNED_IN,
    payload
  }
}

export function isSignInPending (payload) {
  return {
    type: IS_SIGNED_IN_PENDING,
    payload
  }
}

export function initialSignInSuccess (payload) {
  return {
    type: INITIAL_SIGN_IN_SUCCESS,
    payload
  }
}

export function initialSignInFail (payload) {
  return {
    type: INITIAL_SIGN_IN_FAIL,
    payload
  }
}

// THUNKS
export function authenticateBlockstack(payload) {
  /*
    when we authenticate a user with Blockstack,
    we attempt to get their profile based on the id,
    and, if successful, attempt to get their Feed cache
  */
  const {
    isSignInPending,
    isSignedIntoBlockstack
  } = payload

  return async function(dispatch, getState) {
    
  }
}

