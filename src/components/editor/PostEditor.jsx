// IMPORTS
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// COMPONENTS
import PostCanvas from './PostCanvas.jsx';

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

class PostEditor extends Component {
  render() {
    console.log(this);
    return (
      <PostCanvas />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEditor);
