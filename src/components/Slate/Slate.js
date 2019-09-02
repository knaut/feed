// IMPORTS
import React, { Component } from 'react';

// COMPONENTS
import { Editor, EditorState, ContentState } from 'draft-js';
import { Grommet, Box, Button, Grid, TextArea } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Add } from 'grommet-icons';
import Counter from './Counter';
import StatusPost from './StatusPost';
import ImagePost from './ImagePost';
import NotePost from './NotePost';

// STYLES
import css from '@emotion/css'

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
    const id = this.props.id;
    const text = this.state.editorState.getCurrentContent().getPlainText();
    if (text.length) {
      
      this.props.actions.submit({
        Profile: id,
        text
      }, (error) => {

        if (process.env.DEBUG) console.log('aftereffect', {error}, this);
        if (!error) {

          const editorState = EditorState.push(
            this.state.editorState, ContentState.createFromText('')
          );
          if (process.env.DEBUG) console.log({editorState});
          this.setState({
            editorState
          });
          if (process.env.DEBUG) console.log(this.state)
          
        }

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
        onClick={this.focusEditor}
        animation={['slideDown', 'fadeIn']}
        ref='container'
        pad={{top: 'medium', bottom: 'medium'}}
        css={ 
          active ? (
            css`margin-top: 0; transition: 0.3s all ease-in-out;`
          ) : (
            css`margin-top: ${-height}px; transition: 0.2s all ease-in-out;`
          )
        }
      >
        <Box
          pad={{ top: 'medium', left: 'medium', bottom: 'small', right: 'medium' }}
          gap='small'
          background='white'
          css={css`
            border-radius: 12px 18px 32px 12px;
            border: 5px solid var(--light);
          `}
        >
          <div onClick={this.focusEditor}>
            <Editor
              ref={this.setEditor}
              editorState={this.state.editorState}
              onChange={this.onChange}
            />
          </div>
          <Box direction='row' fill>
            <Box 
              direction='row'
              fill
            >
              <StatusPost selected />
              <ImagePost />
              {/*<NotePost />*/}
            </Box>
            <Box
              css={css`position: relative; z-index: 30;`}
            >
              <Counter handler={this.onPostSubmit} count={this.state.count} limit={500}/>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}


export default Slate;