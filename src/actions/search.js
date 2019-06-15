// ACTIONS
export const SEARCH_SUBMIT = 'SEARCH_SUBMIT'
export const SEARCH_SUBMIT_PENDING = 'SEARCH_SUBMIT_PENDING'
export const SEARCH_SUBMIT_SUCCESS = 'SEARCH_SUBMIT_SUCCESS'
export const SEARCH_SUBMIT_FAIL = 'SEARCH_SUBMIT_FAIL'

// MODELS
import Profile from '../models/Profile'

// ACTION CREATORS
export function searchSubmit(payload) {
  return {
    type: SEARCH_SUBMIT,
    payload
  }
}

export function searchSubmitSuccess(payload) {
  return {
    type: SEARCH_SUBMIT_SUCCESS,
    payload
  }
}

export function searchSubmitPending(payload) {
  return {
    type: SEARCH_SUBMIT_PENDING,
    payload: true
  }
}

export function searchSubmitFail(payload) {
  return {
    type: SEARCH_SUBMIT_FAIL,
    payload
  }
}

// THUNKS
export function search( payload ) {
  return async function( dispatch ) {
    const { username } = payload

    const profile = new Profile({
      username
    });

    console.log(profile)

    try {

      const profile = await profile.load()
      console.log(profile)

    } catch (error) {
      console.error(error)
    }

  }
}