// IMPORTS
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// COMPONENTS
import Button from './Button.js'

// ACTIONS
import * as SlateActions from '../../../actions/slate'

function mapStateToProps (state) {
  return state.slate
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      add: SlateActions.activateEditor
    }, dispatch)
  }
}

class Toggle extends Component {
  render () {
    return (
      <Button {...this.props} />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toggle)
