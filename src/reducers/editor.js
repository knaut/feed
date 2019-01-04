// ACTION TYPES
import * as EditorActions from '../actions/editor';

// THUNKS
import * as StatusThunks from '../thunks/status';

// POST TYPES
const STATUS = 'STATUS';

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
    case EditorActions.EDITOR_SUBMIT: {
      newState.input = action.payload.text;
      newState.type = STATUS;
      return newState;
    }
  }

}