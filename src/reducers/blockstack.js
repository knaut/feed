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
    isAuthenticating: false
  },
  action
) {
  switch(action.type) {
    default: {
      return state
    }
  }
}