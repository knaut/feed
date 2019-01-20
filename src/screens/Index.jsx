// IMPORTS
import React, { Component } from 'react';
import { Grommet, Box, Button } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Login } from "grommet-icons";

// STYLES
import styles from '../styles';

// COMPONENTS
import SignIn from '../components/SignIn.jsx';

class App extends Component {
  render() {
    return (
      <Grommet theme={grommet} full>
        <Box fill align="center" justify="center"
          style={{
            background: styles.colors.darks.purple,
            ...styles.app.container,
            alignItems: 'center',
            align: 'center',
            justify: 'center',
            textAlign:'center'
          }}
        >
          <SignIn />
        </Box>
      </Grommet>
    );
  }
}

export default App;
