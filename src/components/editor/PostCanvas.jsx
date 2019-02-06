// IMPORTS
import React, { Component } from 'react';

// COMPONENTS
import { Editor, EditorState, ContentState } from 'draft-js';
import { Grommet, Box, Button, Grid, TextArea } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Add } from 'grommet-icons';
import Counter from './Counter.jsx';

class PostCanvas extends Component {
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

  onChange = (editorState) => {
    const count = editorState.getCurrentContent().getPlainText().length;

    this.setState({
      editorState,
      count
    });
  }  

  onPostSubmit = () => {

    console.log('post submit!', this);

    // const id = this.props.user.username.split('.')[0];
    // const text = this.state.editorState.getCurrentContent().getPlainText();
    // this.props.actions.submit({
    //   Profile: id,
    //   text
    // });
  }
  

  render() {

    

    return (
      <Box 
        align="center"
        pad="medium"
        onClick={this.focusEditor}
        animation={['slideDown', 'fadeIn']}
      >
        <Box
          pad='medium'
          gap='small'
          style={{
            background: 'white',
            width: '100%',
            maxWidth: '800px',
            borderRadius: '12px 18px 26px 12px'
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
          <Box align='end' style={{position: 'relative'}}>
            <Counter onClick={this.onPostSubmit} count={this.state.count} limit={500}/>
          </Box>
        </Box>
      </Box>
    );
  }
}


export default PostCanvas;