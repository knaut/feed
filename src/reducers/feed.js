import * as FeedActions from '../actions/feed'

export default function feed (
  state = {
    /*
      ui state for user feed.
      displays a list of posts for a single user.
      the user could be us, it could be someone else.
    */
    author: null,
    entities: {},
    ids: []
  },
  action
) {
  switch(action.type) {
    default: {
      return state
    }
    case FeedActions.FETCH_FEED_SUCCESS: {
      // pass through our Status cache as-is
      const newState = { ...state }

      const { author, Status } = action.payload
      newState.author = author
      newState.entities = Status.entities
      newState.ids = Status.ids.reverse() // first to last

      return newState
    }

    case FeedActions.FETCH_FEED_FAIL: {
      return state
    }
  }
}