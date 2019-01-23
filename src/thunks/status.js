import Status from '../models/Status';

// ACTIONS
import * as EditorActions from '../actions/editor';
import * as PostActions from '../actions/post';

export function postStatus(payload) {
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
      
      await status.save();

    } catch (error) {
      console.error(error);

      dispatch(
        EditorActions.submitFail(status)
      );
    }

  }
}



export function deleteStatus(payload) {
  return function(dispatch) {
    /*
      based on an id, we attempt to remove this status
      from from gaia, then from our redux store
    */
    const status = new Status(payload);

    try {
      status.delete();

      dispatch(
        PostActions.deleteSuccess(status)
      );

    } catch (error) {
      console.error(error);

      dispatch(
        PostActions.deleteFail(status)
      );
    }
  }
}