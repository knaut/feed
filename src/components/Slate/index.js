// IMPORTS
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// COMPONENTS
import Slate from './Slate'

// ACTIONS
import * as SlateActions from '../../actions/slate'

// THUNKS
// import * as StatusThunks from '../../thunks/status'

function mapStateToProps (state) {
  const {
    slate,
    blockstack
  } = state

  return {
    slate,
    blockstack
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      submit: SlateActions.postStatus,
      change: SlateActions.change
    }, dispatch)
  }
}

class Wrapped extends Component {
  render () {
    const {
      slate,
      blockstack,
      actions
    } = this.props

    return (
      <Slate
        active={slate.active}
        id={blockstack.id}
        actions={actions}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapped)
