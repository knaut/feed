// MODELS
import Status from '../models/Status'

// TYPES
export const SLATE_CHANGE = 'SLATE_CHANGE'
export const SLATE_SUBMIT_FAIL = 'SLATE_SUBMIT_FAIL'
export const SLATE_SUBMIT_SUCCESS = 'SLATE_SUBMIT_SUCCESS'
export const SLATE_ACTIVE = 'SLATE_ACTIVE'

// CREATORS
export function change (payload) {
  return {
    type: SLATE_CHANGE,
    payload
  }
}

export function submitSuccess (payload) {
  return {
    type: SLATE_SUBMIT_SUCCESS,
    payload
  }
}

export function submitFail (payload) {
  return {
    type: SLATE_SUBMIT_FAIL,
    payload
  }
}

export function activateEditor (payload) {
  return {
    type: SLATE_ACTIVE,
    payload
  }
}

// THUNKS
export function postStatus (payload, after) {
  return async function (dispatch) {
    /*
      thunks are the connecting api tissue in our serverless app.
      if our post is successful, the thunk should modify our files on gaia.
      if not, we should dispatch an action to inform our components.
    */
    const status = new Status(payload)

    try {
      dispatch(
        submitSuccess(status)
      )

      after()

      await status.save()

    } catch (error) {
      console.error(error)

      dispatch(
        submitFail(status)
      )

      after(error)
    }
  }
}

