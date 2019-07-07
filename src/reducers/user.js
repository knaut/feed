// ACTION TYPES
import * as UserActions from '../actions/user'

// MAIN REDUCER
export default function user (
  state = {
    username: null,
    name: null,
    image: null,
    description: null,

    isAuthenticated: false,
    isAuthenticating: false
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
    case UserActions.IS_SIGNED_IN_PENDING: {
      newState.isAuthenticating = true

      return newState
    }
    case UserActions.IS_SIGNED_IN: {
      newState.username = action.payload.username
      newState.isAuthenticated = true
      newState.isAuthenticating = false
      newState.name = action.payload.name
      newState.description = action.payload.description
      newState.image = action.payload.image

      return newState
    }
    case UserActions.IS_NOT_SIGNED_IN: {
      newState.isAuthenticated = false
      newState.isAuthenticating = false

      return newState
    }
  }
}
