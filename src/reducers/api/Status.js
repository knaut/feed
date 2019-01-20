// ACTION TYPES
import * as UserActions from '../../actions/user';

// MAIN REDUCER
export default function Status(
  state = {
    entities: {},
    ids: []
  },
  action
) {
  let newState = {
    ...state
  };

  switch (action.type) {
    default: {
      return newState;
    }
    case UserActions.IS_SIGNED_IN: {
      return newState;
    }

  }
}