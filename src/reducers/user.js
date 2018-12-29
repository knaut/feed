// MAIN REDUCER
export default function user(
  state = {
    id: null,
    isAuthenticated: false
  },
  action
) {
  let newState = {
    ...state
  };

  switch (action.type) {
    default:
      return newState;
  }
}