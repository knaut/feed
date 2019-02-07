// IMPORTS
import React, { Component } from 'react';

// COMPONENTS
import { Editor, EditorState, ContentState } from 'draft-js';
import { Grommet, Box, Button, Grid, TextArea } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Add } from 'grommet-icons';
import Counter from './Counter.jsx';

class Slate extends Component {
  state = {
    input: false,
    height: 0,
    editorState: EditorState.createEmpty()
  }

  componentDidMount() {
    this.focusEditor();
    this.setState({
      height: this.refs.container.clientHeight
    });
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
      height: this.refs.container.clientHeight,
      editorState,
      count
    });
  }  

  onPostSubmit = () => {
    const id = this.props.user.username.split('.')[0];
    const text = this.state.editorState.getCurrentContent().getPlainText();
    if (text.length) {
      this.props.actions.submit({
        Profile: id,
        text
      });
    } else {
      console.error('Empty posts are not allowed.');
    }
  }
  

  render() {
    const { height } = this.state;
    const { active } = this.props;

    return (
      <Box 
        align="center"
        pad="medium"
        onClick={this.focusEditor}
        animation={['slideDown', 'fadeIn']}
        ref='container'
        style={ active ? ({
          marginTop: 0,
          transition: '0.3s all ease-in-out'
        }) : ({
          marginTop: -height,
          transition: '0.2s all ease-in-out'
        }) }
      >
        <Box
          pad='medium'
          gap='small'
          style={{
            background: 'white',
            width: '100%',
            maxWidth: '800px',
            borderRadius: '12px 18px 32px 12px'
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
          <Box align='end' style={{position: 'relative', zIndex: 30}}>
            <Counter handler={this.onPostSubmit} count={this.state.count} limit={500}/>
          </Box>
        </Box>
      </Box>
    );
  }
}


export default Slate;