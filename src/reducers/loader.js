// MAIN REDUCER
export default function loader (
  state = {
    isLoading: false
  },
  action
) {
  const string = action.type

  if (string.indexOf('PENDING') > -1) {
    return {
      isLoading: true
    }
  } else {
    return {
      isLoading: false
    }
  }

}