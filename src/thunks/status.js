import Status from '../models/Status';

// ACTIONS
import * as EditorActions from '../actions/editor';
import * as PostActions from '../actions/post';

export function postStatus(payload, after) {
  return async function(dispatch) {
    /*
      thunks are the connecting api tissue in our serverless app.
      if our post is successful, the thunk should modify our files on gaia.
      if not, we should dispatch an action to inform our components.
    */
    const status = new Status(payload);

    try {
      dispatch(
        EditorActions.submitSuccess(status)
      );

      after();

      await status.save();

    } catch (error) {
      console.error(error);

      dispatch(
        EditorActions.submitFail(status)
      );

      after(error);
    }

  }
}

export function deleteStatus(payload) {
  return async function(dispatch, getState) {
    /*
      based on an id, we attempt to remove this status
      from from gaia, then from our redux store
    */
    const { id } = payload;
    const state = getState();

    try {
      const status = await Status.loadById(id, state.Status );

      dispatch(
        PostActions.deleteSuccess(status)
      );

      await status.delete();

    } catch (error) {
      console.error(error);

      dispatch(
        PostActions.deleteFail(status)
      );
    }
  }
}