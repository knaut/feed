// ACTION TYPES
import * as SlateActions from '../actions/slate'

// THUNKS
// import * as StatusThunks from '../thunks/status'

// POST TYPES
const STATUS = 'STATUS'

// MAIN REDUCER
export default function editor (
  /*
    the editor is our main interaction with posting content to feed.
    as such, it will have to handle many kinds of content and edge cases.
  */
  state = {
    // input represents whether our editor has user-generated content
    input: false,
    // type is the type of input: status, note, photo, video, etc...
    type: null,
    // whether the editor pane is available
    active: false

    // length is not length of the status
    // it is a ui factor determining the length of the entered text in the ui
    // length: null,

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
    case SlateActions.SLATE_CHANGE: {
      newState.input = true
      newState.type = STATUS
      return newState
    }
    case SlateActions.SLATE_SUBMIT_SUCCESS: {
      /*
        we clear our editor's contents
      */
      newState.active = false
      newState.input = false
      newState.type = null
      return newState
    }
    case SlateActions.SLATE_ACTIVE: {
      newState.active = !newState.active
      return newState
    }
  }
}
