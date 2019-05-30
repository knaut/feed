// IMPORTS
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// COMPONENTS
import Slate from './Slate';

// ACTIONS
import * as EditorActions from '../../actions/editor';

// THUNKS
import * as StatusThunks from '../../thunks/status';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return { 
    actions: bindActionCreators({
      submit: StatusThunks.postStatus,
      change: EditorActions.change
    }, dispatch) 
  };
}

class Wrapped extends Component {
  render() {
    return (
      <Slate
        active={this.props.editor.active} 
        user={this.props.user}
        actions={this.props.actions}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapped);
