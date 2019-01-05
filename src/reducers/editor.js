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
    // input represents whether our editor has user-generated content
    input: false,
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
    case EditorActions.EDITOR_CHANGE: {
      newState.input = true;
      newState.type = STATUS;
      return newState;
    }
    case EditorActions.EDITOR_SUBMIT_SUCCESS: {
      /*
        we clear our editor's contents
      */
      newState.input = false;
      newState.type = null;
      return newState;
    }
  }

}