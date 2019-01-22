// ACTION TYPES

// MAIN REDUCER
export default function cache(
  state = {
    isLoaded: false
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
    case 'GET_CACHE_SUCCESS': {
      newState.isLoaded = true;

      return newState;
    }
  }
}