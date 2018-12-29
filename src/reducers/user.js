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
    case 'IS_SIGNED_IN': {
      newState.username = action.payload.username;
      newState.isAuthenticated = true;

      return newState;
    }

  }
}