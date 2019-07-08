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
    user
  } = state

  return {
    slate,
    user
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      // submit: StatusThunks.postStatus,
      change: SlateActions.change
    }, dispatch)
  }
}

class Wrapped extends Component {
  render () {
    const {
      slate,
      user,
      actions
    } = this.props

    return (
      <Slate
        active={slate.active}
        user={user}
        actions={actions}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapped)
