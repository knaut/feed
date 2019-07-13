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
    case CacheActions.GET_CACHE_SUCCESS: {
      let newState = { ...state }

      // since we got cache, assume the user has a feed
      newState.isOnFeed = true

      return newState
    }
    case BlockstackActions.IS_SIGNED_IN: {
      let newState = { ...state }

      const id = action.payload.username.split('.')[0]
      const name = action.payload.profile.name
      const description = action.payload.profile.description
      const image = action.payload.profile.image ? (
          action.payload.profile.image[0].contentUrl
        ) : null

      return {
        id,
        name,
        image,
        description,

        isAuthenticated: true,
        isAuthenticating: false,

        isOnFeed: newState.isOnFeed
      }
    }
  }
}