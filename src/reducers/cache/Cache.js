// ACTION BUNDLES
import * as SlateActions from '../../actions/slate'
import * as PostActions from '../../actions/post'
import * as CacheActions from '../../actions/cache'

const VERSION = process.env.VERSION

// MAIN REDUCER
export default function Cache (
  state = {
    v: null,    // version number to compare our cache with latest utility release
    alerts: [],  // any alert objects based on API version mismatch
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
    case CacheActions.GET_CACHE_PENDING: {
      const newState = { ...state }

      newState.isLoading = true

      return newState
    }
    case CacheActions.GET_CACHE_SUCCESS: {
      const newState = { ...state }
      const { Cache } = action.payload

      if (Cache) {
        const { v } = Cache
        newState.v = v
      } else {
        // old cache, no version
        newState.v = VERSION
      }

      newState.isLoaded = true
      newState.isLoading = false

      return newState
    }
    case CacheActions.START_CACHE_SUCCESS: {
      const newState = { ...state }
      const { Cache } = action.payload

      if (Cache) {
        const { v } = Cache
        newState.v = v
      } else {
        // old cache, no version
        newState.v = VERSION
      }

      newState.isLoaded = true
      newState.isLoading = false

      return newState
    }
  }
}
