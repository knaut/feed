import Status from '../models/Status';

export function postStatus(payload) {
  return function(dispatch) {
    /*
      thunks are the connecting api tissue in our serverless app.
      if our post is successful, the thunk should modify our files on gaia.
      if not, we should dispatch an action to inform our components.
    */
    const status = new Status(payload.text);
    status.save();

  }
}