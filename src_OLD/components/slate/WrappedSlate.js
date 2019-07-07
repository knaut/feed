// IMPORTS
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// COMPONENTS
import Slate from './Slate'

// ACTIONS
import * as EditorActions from '../../actions/editor'

// THUNKS
import * as StatusThunks from '../../thunks/status'

function mapStateToProps (state) {
  const {
    editor,
    user
  } = state

  return {
    editor,
    user
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      submit: StatusThunks.postStatus,
      change: EditorActions.change
    }, dispatch)
  }
}

class Wrapped extends Component {
  render () {
    const {
      editor,
      user,
      actions
    } = this.props

    return (
      <Slate
        active={editor.active}
        user={user}
        actions={actions}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapped)
