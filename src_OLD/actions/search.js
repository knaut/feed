import * as blockstack from 'blockstack'
// BLOCKSTACK AUTH UTILS
import {
  loginToBlockstack,
  getProfileData,
  signInPending
} from '../authentication/loginToBlockstack'

// MODELS
import Profile from '../models/Profile'

// ACTIONS
export const SEARCH_SUBMIT_PENDING = 'SEARCH_SUBMIT_PENDING'
export const SEARCH_SUBMIT_SUCCESS = 'SEARCH_SUBMIT_SUCCESS'
export const SEARCH_SUBMIT_FAIL = 'SEARCH_SUBMIT_FAIL'

// ACTION CREATORS
export function searchSubmitSuccess (payload) {
  return {
    type: SEARCH_SUBMIT_SUCCESS,
    payload
  }
}

export function searchSubmitPending (payload) {
  return {
    type: SEARCH_SUBMIT_PENDING,
    payload: true
  }
}

export function searchSubmitFail (payload) {
  return {
    type: SEARCH_SUBMIT_FAIL,
    payload
  }
}

// THUNKS
export function searchSubmit (payload) {
  return async function (dispatch) {
    dispatch(
      searchSubmitPending()
    )

    const { username } = payload
    const profile = new Profile({
      username
    })

    try {
      const entity = await profile.load()

      if (entity) {
        const blockstackUser = await blockstack.lookupProfile(`${username}.id.blockstack`)

        const name = blockstackUser.name
        const description = blockstackUser.description
        const image = blockstackUser.image[0].contentUrl

        const result = {
          [username]: {
            profile: entity,
            blockstack: {
              name,
              username,
              description,
              image
            }
          }
        }

        dispatch(
          searchSubmitSuccess(result)
        )
      } else {
        // if there is no entity, then we have no user with this name in the cache
        // try to lookup their profile and provide blockstack profile information

        const blockstackUser = await blockstack.lookupProfile(`${username}.id.blockstack`)

        const name = blockstackUser.name
        const description = blockstackUser.description
        const image = blockstackUser.image[0].contentUrl

        const result = {
          [username]: {
            blockstack: {
              name,
              username,
              description,
              image
            }
          }
        }

        dispatch(
          searchSubmitSuccess(result)
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