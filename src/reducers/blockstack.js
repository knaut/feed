import * as BlockstackActions from '../actions/blockstack'
import * as CacheActions from '../actions/cache'

export default function blockstack (
  state = {
    /*
      state for the logged in blockstack user
    */
    id: null,
    name: null,
    image: null,
    description: null,

    isAuthenticated: false,
    isAuthenticating: false,
    isOnFeed: null
  },
  action
) {
  switch(action.type) {
    default: {
      return state
    }
    case BlockstackActions.IS_NOT_SIGNED_IN: {
      let newState = { ...state }

      newState.isAuthenticating = false

      return newState
    }
    case BlockstackActions.IS_SIGNED_IN_PENDING: {
      let newState = { ...state }

      newState.isAuthenticating = true

      return newState
    }
    case CacheActions.GET_CACHE_SUCCESS: {
      let newState = { ...state }

      // since we got cache, assume the user has a feed
      newState.isOnFeed = true

      return newState
    }
    case BlockstackActions.IS_SIGNED_IN: {
      let newState = { ...state }

      newState.id = action.payload.username.split('.')[0]
      newState.name = action.payload.profile.name
      newState.description = action.payload.profile.description
      newState.image = action.payload.profile.image ? (
          action.payload.profile.image[0].contentUrl
        ) : null

      newState.isAuthenticated = true
      newState.isAuthenticating = false

      return newState
    }
  }
}