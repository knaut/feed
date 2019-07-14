import Status from '../models/Status'

// ACTIONS
import * as SlateActions from './slate'

// TYPES
export const POST_DELETE_FAIL = 'POST_DELETE_FAIL'
export const POST_DELETE_SUCCESS = 'POST_DELETE_SUCCESS'

// CREATORS
export function deleteSuccess (payload) {
  return {
    type: POST_DELETE_SUCCESS,
    payload
  }
}

export function deleteFail (payload) {
  return {
    type: POST_DELETE_FAIL,
    payload
  }
}


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
        SlateActions.submitSuccess(status)
      )

      after()

      await status.save()
    } catch (error) {
      console.error(error)

      dispatch(
        SlateActions.submitFail(status)
      )

      after(error)
    }
  }
}

export function deleteStatus (payload) {
  return async function (dispatch, getState) {
    /*
      based on an id, we attempt to remove this status
      from from gaia, then from our redux store
    */
    const { id } = payload
    const state = getState()

    try {
      const status = await Status.loadById(id, state.Status)

      dispatch(
        deleteSuccess(status)
      )

      await status.delete()
    } catch (error) {
      console.error(error)

      dispatch(
        deleteFail(status)
      )
    }
  }
}
