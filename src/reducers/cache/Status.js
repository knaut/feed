// ACTION BUNDLES
import * as SlateActions from '../../actions/slate'
import * as PostActions from '../../actions/post'
import * as CacheActions from '../../actions/cache'

// MAIN REDUCER
export default function Status (
  state = {
    entities: {},
    ids: []
  },
  action
) {

  switch (action.type) {
    default: {
      return state
    }
    
    case CacheActions.GET_CACHE_SUCCESS: {
      const newState = { ...state }
      const { entities, ids } = action.payload.Status

      newState.entities = entities
      newState.ids = ids

      return newState
    }

    
    case SlateActions.SLATE_SUBMIT_SUCCESS: {
      const newState = { ...state }

      const status = action.payload
      const props = status.getProps()

      console.log(status, props)
      newState.entities[ props.id ] = props
      newState.ids.splice(0, 0, props.id)

      return newState
    }

    /*
    case PostActions.POST_DELETE_SUCCESS: {
      const { id } = action.payload

      delete newState.entities[ id ]
      const index = newState.ids.indexOf(id)
      newState.ids.splice(index, 1)

      return newState
    }
    */
  }
}
