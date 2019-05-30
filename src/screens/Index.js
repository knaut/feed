// IMPORTS
import React, { Component } from 'react';
import { Grommet, Box, Button } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Login } from "grommet-icons";

// STYLES
import styles from '../styles';

// COMPONENTS
import SignIn from '../components/SignIn';

class Index extends Component {
  render() {
    return (
      <Grommet theme={grommet} full>
        <Box style={{
          background: styles.colors.darks.purple,
          ...styles.app.container,
        }}>
          <Box fill align="center" justify="center"
            style={{
              alignItems: 'center',
              align: 'center',
              justify: 'center',
              textAlign:'center'
            }}
          >
            <SignIn />
          </Box>
        </Box>
      </Grommet>
    );
  }
}

export default Index;
