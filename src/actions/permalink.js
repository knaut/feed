// ACTION BUNDLES
import * as LoaderActions from '../actions/loader'
import * as CacheActions from '../actions/cache'

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

export function fetchPermalinkFail(payload) {
  return {
    type: PERMALINK_FETCH_FAIL,
    payload
  }
}

// THUNKS
export function fetchPermalink(payload) {
  return async function(dispatch, getState) {
    dispatch(
      LoaderActions.loaderOn()
    )

    const state = getState()

    console.log({payload, state})

    const {
      author,
      link,
      blockstackUserIsAuthor
    } = payload
    
    const {
      Status,
      blockstack
    } = state

    if (blockstackUserIsAuthor === true) {
      const post = Status[ link ]
      const authorObj = {
        image: blockstack.image,
        name: blockstack.name,
        username: blockstack.id
      }
      
      dispatch(
        fetchPermalinkSuccess({
          post,
          author: authorObj
        })
      )
    }
  }
}