
// IMPORTS
import * as blockstack from 'blockstack';

// ACTIONS
import * as UserActions from '../actions/user';

// THUNKS
export function loginToBlockstack() {
  /*
    attempt to login to blockstack and dispatch some actions based
    on what we've got available to us
  */
  return function(dispatch) {
    console.log('blerg!')
    if (blockstack.isUserSignedIn()) {
      
      const { username } = blockstack.loadUserData();

      dispatch(
        UserActions.isSignedIn({
          username
        })
      );
    
    } else if (blockstack.isSignInPending()) {

      blockstack.handlePendingSignIn().then( function(userData) {
        window.location = window.location.origin;
      });

    } else {
      dispatch(
        UserActions.isNotSignedIn({})
      );
    }
  }
}

