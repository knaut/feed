import * as blockstack from 'blockstack'

// TYPES
export const SEARCH_SUBMIT_PENDING = 'SEARCH_SUBMIT_PENDING'
export const SEARCH_SUBMIT_SUCCESS = 'SEARCH_SUBMIT_SUCCESS'
export const SEARCH_SUBMIT_FAIL = 'SEARCH_SUBMIT_FAIL'

// CREATORS
export function searchSubmitSuccess (payload) {
  return {
    type: SEARCH_SUBMIT_SUCCESS,
    payload
  }
}

export function searchSubmitPending (payload) {
  return {
    type: SEARCH_SUBMIT_PENDING,
    payload
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
    const { username } = payload

    dispatch(
      searchSubmitPending( username )
    )

    try {
      const profile = await blockstack.lookupProfile(`${username}.id.blockstack`)
      
      const name = profile.name ? profile.name : false
      const description = profile.description ? profile.description : false
      const image = profile.image ? profile.image[0].contentUrl : false

      const result = {
        [username]: {
          profile,
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
    } catch (error) {
      console.error(error)
      dispatch(
        searchSubmitFail(username)
      )
    }

  }
}
