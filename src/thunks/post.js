import Status from '../models/Status';


export function deletePost(payload) {
  return function(dispatch) {
    /*
      based on an id, we attempt to remove this status
      from from gaia, then from our redux store
    */
    console.log(payload, Status.save);

  }
}