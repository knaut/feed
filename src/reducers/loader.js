import * as LoaderActions from '../actions/loader'

// MAIN REDUCER
export default function loader (
  state = {
    isLoading: false,
    isFading: false,
    isDone: true
  },
  action
) {
  switch(action.type) {
    default: {
      return state
    }
    case LoaderActions.LOADER_ON: {
      return {
        isLoading: true,
        isFading: false,
        isDone: false
      }
    }
    case LoaderActions.LOADER_OFF: {
      return {
        isLoading: false,
        isFading: false,
        isDone: true
      }
    }
  }
}
