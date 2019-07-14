// ACTION BUNDLES
import * as SlateActions from '../actions/slate'
import * as FeedActions from '../actions/feed'
import * as PostActions from '../actions/post'

// MAIN REDUCER
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
    case SlateActions.SLATE_SUBMIT_SUCCESS: {
      const newState = { ...state }

      const status = action.payload
      const props = status.getProps()

      newState.entities[ props.id ] = props
      newState.ids.splice(0, 0, props.id)

      return newState
    }

    case PostActions.POST_DELETE_SUCCESS: {
      const newState = { ...state }
      
      const { id } = action.payload

      delete newState.entities[ id ]
      const index = newState.ids.indexOf(id)
      newState.ids.splice(index, 1)

      return newState
    }
  }
}