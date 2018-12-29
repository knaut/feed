// MAIN REDUCER
export default function user(
  state = [],
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