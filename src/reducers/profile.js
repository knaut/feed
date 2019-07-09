import * as ProfileActions from '../actions/Profile'

export default function profile (
  state = {
    isLoading: true,
    isOnBlockstack: null,
    isOnFeed: null,
    isMe: false,

    username: null,  // legacy
    image: null,
    name: null,
    description: null,
  },
  action
) {
  switch(action.type) {
    default: {
      return state
    }
    case ProfileActions.PROFILE_LOAD_PENDING: {
      const newState = { ...state }
      const { id } = action.payload
      
      newState.isLoading = true
      newState.username = id
      newState.isOnBlockstack = null
      newState.isOnFeed = null
      newState.isMe = false
      newState.name = null
      newState.description = null
      
      return newState
    }
    case ProfileActions.PROFILE_LOAD_SUCCESS: {
      const newState = { 
        ...state,
        ...action.payload
      }
      return newState
    }
  }
}