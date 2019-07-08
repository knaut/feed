import * as FeedActions from '../actions/feed'

export default function feed (
  state = {
    /*
      ui state for user feed.
      displays a list of posts for a single user.
      the user could be us, it could be someone else.
    */
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
      return action.payload.Status
    }

    case FeedActions.FETCH_FEED_FAIL: {
      return state
    }
  }
}