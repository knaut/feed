
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