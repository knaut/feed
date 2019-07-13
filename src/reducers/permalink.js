import * as PermalinkActions from '../actions/permalink'

// MAIN REDUCER
export default function permalink (
  state = {
    author: null,
    post: null
  },
  action
) {
  switch(action.type) {
    default: {
      return state
    }
    case PermalinkActions.PERMALINK_FETCH_SUCCESS: {
      return state
    }
    
  }
}
