// ACTION TYPES
import * as EditorActions from '../actions/editor';

export default function feed(
  state = {
    posts: []
  },
  action
) {
  let newState = {
    ...state
  };

  switch(action.type) {
    default: {
      return newState;
    }
    case EditorActions.EDITOR_SUBMIT_SUCCESS: {
      // add this post to the top of our feed
      newState.splice( 0, 0, action.payload.post );
      return newState;
    }
  }
}