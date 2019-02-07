// IMPORTS
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// COMPONENTS
import Slate from './Slate.jsx';

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
        submit={this.props.actions.submit}
        change={this.props.actions.change}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapped);
