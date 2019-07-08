// ACTION TYPES
import * as CacheActions from '../actions/cache'

// MAIN REDUCER
export default function cache (
  state = {
    isLoading: false,
    isLoaded: false
  },
  action
) {
  let newState = {
    ...state
  }

  switch (action.type) {
    default: {
      return newState
    }
    case CacheActions.GET_MY_CACHE_FAIL: {
      newState.isLoaded = false

      return newState
    }
    case CacheActions.GET_MY_CACHE_PENDING: {
      newState.isLoaded = false

      return newState
    }
    case CacheActions.GET_MY_CACHE_SUCCESS: {
      newState.isLoaded = true

      return newState
    }
  }
}
