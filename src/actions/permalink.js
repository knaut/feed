// ACTION BUNDLES
import * as LoaderActions from '../actions/loader'

// TYPES
export const PERMALINK_FETCH_SUCCESS = 'PERMALINK_FETCH_SUCCESS'
export const PERMALINK_FETCH_FAIL = 'PERMALINK_FETCH_FAIL'

// CREATORS
export function fetchPermalinkSuccess(payload) {
  return {
    type: PERMALINK_FETCH_SUCCESS,
    payload
  }
}

// THUNKS
export function fetchPermalink(payload) {
  return async function(dispatch, getState) {
    dispatch(
      LoaderActions.loaderOn()
    )
  }
}