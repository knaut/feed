// ACTION TYPES
import * as UserActions from '../actions/user';

// MAIN REDUCER
export default function user(
  state = {
    username: null,
    name: null,
    image: null,
    description: null,

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
      newState.name = action.payload.name;
      newState.description = action.payload.description;
      newState.image = action.payload.image;

      return newState;
    }

  }
}