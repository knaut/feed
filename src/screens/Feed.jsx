// IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grommet, Box, Button } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Login } from "grommet-icons";

// STYLES
import styles from '../styles';

// COMPONENTS
import SignIn from '../components/SignIn.jsx';

class Feed extends Component {
  render() {
    return (
      <Grommet theme={grommet}>
        <div 
          style={{
            background: styles.colors.darks.purple,
            ...styles.app.container
          }}
        >
          <Box pad={{ horizontal: 'xlarge', vertical: 'large' }}>
            <Box>
              <h1 style={{
                color: styles.colors.pastels.purple
              }}>This is the feed page.</h1>
            </Box>
          </Box>
        </div>
      </Grommet>
    );
  }
}

export default Feed;
