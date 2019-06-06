// IMPORTS
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// COMPONENTS
import AddPost from './AddPost.js';

// ACTIONS
import * as EditorActions from '../../actions/editor';

// THUNKS
import * as StatusThunks from '../../thunks/status';

function mapStateToProps(state) {
  return state.editor;
}

function mapDispatchToProps(dispatch) {
  return { 
    actions: bindActionCreators({
      add: EditorActions.activateEditor
    }, dispatch) 
  };
}

class Wrapped extends Component {
  render() {
    return (
      <AddPost {...this.props}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapped);