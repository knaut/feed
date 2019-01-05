import Status from '../models/Status';

// ACTIONS
import * as EditorActions from '../actions/editor';

export function postStatus(payload, aftereffect) {
  return function(dispatch) {
    /*
      thunks are the connecting api tissue in our serverless app.
      if our post is successful, the thunk should modify our files on gaia.
      if not, we should dispatch an action to inform our components.
    */
    const status = new Status(payload.text);

    try {
      status.save();
      
      dispatch(
        EditorActions.submitSuccess(status)
      );

      aftereffect();

    } catch (error) {
      console.error(error);

      dispatch(
        EditorActions.submitFail(status)
      );
    }

  }
}