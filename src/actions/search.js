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
    const author = username

    try {
      const profile = await blockstack.lookupProfile(`${author}.id.blockstack`)
      authorProfile.name = profile.name
      authorProfile.username = author
      authorProfile.image = profile.image ? profile.image[0].contentUrl : false
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
    } catch (error) {
      console.error(error)
      dispatch(
        searchSubmitFail(username)
      )
    }

  }
}
