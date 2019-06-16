import * as blockstack from 'blockstack';
// BLOCKSTACK AUTH UTILS
import {
  loginToBlockstack,
  getProfileData,
  signInPending
} from '../authentication/loginToBlockstack'

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

    dispatch(
      searchSubmitPending()
    )

    const { username } = payload
    const profile = new Profile({
      username
    });

    try {

      const entity = await profile.load()
      
      if (entity) {
        const blockstackUser = await blockstack.lookupProfile(`${username}.id.blockstack`)

        const name = blockstackUser.name
        const description = blockstackUser.description
        const image = blockstackUser.image[0].contentUrl

        const fullProfile = {
          ...entity,
          blockstack: {
            name,
            username,
            description,
            image
          }
        }

        dispatch(
          searchSubmitSuccess(fullProfile)
        )
      } else {
        dispatch(
          searchSubmitFail(username)
        )
      }

    } catch (error) {
      console.error(error)

      dispatch(
        searchSubmitFail(username)
      )
    }

  }
}