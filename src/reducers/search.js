// ACTIONS
import * as SearchActions from '../actions/search'

// MAIN REDUCER
export default function search (
  state = {
    isFetching: false,
    matches: {}
  },
  action
) {

  switch(action.type) {
    default: {
      return state
    }
    case SearchActions.SEARCH_SUBMIT_PENDING: {
      let newState = { ...state }

      newState.isFetching = true
      newState.matches = {}

      return newState
    }
    case SearchActions.SEARCH_SUBMIT_FAIL: {
      let newState = { ...state }

      newState.isFetching = false
      newState.matches = {}

      return newState
    }
    case SearchActions.SEARCH_SUBMIT_SUCCESS: {
      let newState = { ...state }

      newState.isFetching = false
      // newState.matches = action.payload

      return newState
    }
  }

}