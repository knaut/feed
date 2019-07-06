// ACTION TYPES
import * as UserActions from '../../actions/user'
import * as EditorActions from '../../actions/editor'
import * as PostActions from '../../actions/post'

// MAIN REDUCER
export default function Status (
  state = {
    entities: {},
    ids: []
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
    case 'GET_CACHE_SUCCESS': {
      const { entities, ids } = action.payload.Status

      newState.entities = entities
      newState.ids = ids

      return newState
    }
    case EditorActions.EDITOR_SUBMIT_SUCCESS: {
      const status = action.payload
      const props = status.getProps()
      newState.entities[ props.id ] = props
      newState.ids.splice(0, 0, props.id)

      return newState
    }
    case PostActions.POST_DELETE_SUCCESS: {
      const { id } = action.payload

      delete newState.entities[ id ]
      const index = newState.ids.indexOf(id)
      newState.ids.splice(index, 1)

      return newState
    }
  }
}
