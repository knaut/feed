// IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grommet, Box, Button } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Login } from "grommet-icons";

// STYLES
import styles from '../styles';

// COMPONENTS
import AddPostButton from '../components/AddPostButton.jsx';
import MyProfileButton from '../components/MyProfileButton.jsx';

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
          <Box
            tag='header'
            justify='between'
            align='start'
            direction='row'
          >
            <AddPostButton/>
            <MyProfileButton/>
          </Box>
        </div>
      </Grommet>
    );
  }
}

export default Feed;
