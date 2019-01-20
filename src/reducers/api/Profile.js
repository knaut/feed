// ACTION TYPES
import * as UserActions from '../../actions/user';

// MAIN REDUCER
export default function Profile(
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
    case 'GET_CACHE_SUCCESS': {
      const { entities, ids } = action.payload.Profile;

      newState.entities = entities;
      newState.ids = ids;

      return newState;
    }
    case UserActions.IS_SIGNED_IN: {
      return newState;
    }

  }
}