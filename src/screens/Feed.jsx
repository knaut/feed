// IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grommet, Box, Button, Grid, TextArea } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Login } from "grommet-icons";

// STYLES
import styles from '../styles';

// COMPONENTS
import Editor from '../components/Editor.jsx';
import AddPostButton from '../components/AddPostButton.jsx';
import MyProfileButton from '../components/MyProfileButton.jsx';
import FeedList from '../components/FeedList.jsx';

class Feed extends Component {
  render() {
    return (
      <Grommet theme={grommet}>
        <div 
          style={{
            background: styles.colors.darks.purple,
            ...styles.app.container,
            justifyContent: 'start'
          }}
        >
          <Grid
            fill
            areas={[
              { name: 'left', start: [0, 0], end: [0, 0] },
              { name: 'main', start: [1, 0], end: [1, 0] },
              { name: 'right', start: [2, 0], end: [2, 0] }
            ]}
            columns={['xsmall', 'flex', 'xsmall']}
            rows={['flex']}
            gap='small'
          >
            <Box gridArea='left'>
              <AddPostButton/>
            </Box>
            <Box gridArea='main'>
              <Editor />
              <FeedList />
            </Box>
            <Box gridArea='right'>
              <MyProfileButton/>
            </Box>
          </Grid>
        </div>
      </Grommet>
    );
  }
};

export default Feed;
