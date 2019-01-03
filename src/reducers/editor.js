// ACTION TYPES
import * as EditorActions from '../actions/editor';

// MAIN REDUCER
export default function editor(
  /*
    the editor is our main interaction with posting content to feed.
    as such, it will have to handle many kinds of content and edge cases.
  */
  state = {
    // input is our general catch-all input
    input: null,
    // type is the type of input: status, note, photo, video, etc...
    type: null
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
  }

}