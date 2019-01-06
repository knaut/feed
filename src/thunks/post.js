import Status from '../models/Status';

// ACTIONS
import * as PostActions from '../actions/post';

export function deletePost(payload) {
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