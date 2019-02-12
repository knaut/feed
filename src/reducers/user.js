// ACTION TYPES
import * as UserActions from '../actions/user';

// MAIN REDUCER
export default function user(
  state = {
    username: null,
    isAuthenticated: false
  },
  action
) {
  let newState = {
    ...state
  };

  switch (action.type) {
    default: {
      return newState;
    }
    case UserActions.IS_SIGNED_IN: {
      newState.username = action.payload.username.split('.')[0];
      newState.isAuthenticated = true;

      return newState;
    }

  }
}