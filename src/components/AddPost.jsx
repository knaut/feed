// IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';

// COMPONENTS
import { Grommet, Box, Button, Grid, TextArea } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Editor, EditorState } from 'draft-js';
import { Add } from 'grommet-icons';

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
    this.setEditor = (editor) => {
      this.editor = editor;
    };
    this.focusEditor = () => {
      if (this.editor) {
        this.editor.focus();
      }
    };
  }

  componentDidMount() {
    this.focusEditor();
  }

  render() {
    return (
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
    );
  }
}

class AddPost extends Component {
  state = {
    value: ''
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    const { value } = this.state;

    return (
      <Box align="center" pad="medium">
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
          <TextEditor />
          <Box align='end'>
            <Button>
              <Add/>
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }
};

export default AddPost;