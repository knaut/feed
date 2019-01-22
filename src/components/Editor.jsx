// IMPORTS
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// COMPONENTS
import { Editor, EditorState, ContentState } from 'draft-js';
import { Grommet, Box, Button, Grid, TextArea } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Add } from 'grommet-icons';

// ACTIONS
import * as EditorActions from '../actions/editor';

// THUNKS
import * as StatusThunks from '../thunks/status';

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
  state = {
    input: false,
    editorState: EditorState.createEmpty()
  }

  componentDidMount() {
    this.focusEditor();
  }

  // draftjs setup methods
  setEditor = (editor) => {
    this.editor = editor;
  };

  focusEditor = () => {
    if (this.editor) {
      this.editor.focus();
    }
  };

  // event handlers
  onChange = (editorState) => {
    this.setState({
      editorState 
    });
  }

  onPostSubmit = () => {
    const id = this.props.user.username.split('.')[0];
    const text = this.state.editorState.getCurrentContent().getPlainText();
    this.props.actions.submit({
      Profile: id,
      text
    });
  }

  render() {
    const { value } = this.state;

    return (
      <Box align="center" pad="medium" onClick={this.focusEditor}>
        <Box
          pad='medium'
          gap='small'
          round
          style={{
            background: 'white',
            width: '100%',
            maxWidth: '800px'
          }}
        >
          <div 
            onClick={this.focusEditor}
            style={{
              border: 0
            }}
          >
            <Editor
              ref={this.setEditor}
              editorState={this.state.editorState}
              onChange={this.onChange}
            />
          </div>
          <Box align='end'>
            <Button onClick={this.onPostSubmit}>
              <Add/>
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostEditor);