export default function feed (
  state = {
    /*
      ui state for user feed.
      displays a list of posts for a single user.
      the user could be us, it could be someone else.
    */
    author: null, // id of the user this feed belongs to
    entities: {},
    ids: []
  },
  action
) {
  switch(action.type) {
    default: {
      return state
    }
  }
}