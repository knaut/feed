// ACTION TYPES
import * as UserActions from '../../actions/user';
import * as EditorActions from '../../actions/editor';

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
    case EditorActions.EDITOR_SUBMIT_SUCCESS: {
      const status = action.payload;
      const props = status.getProps();
      newState.entities[ props.Profile ].Status.splice(0, 0, props.id );

      return newState;
    }

  }
}