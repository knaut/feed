// IMPORTS
import React, { Component } from 'react';
import { Grommet, Box, Button } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Login } from "grommet-icons";

// STYLES
import styles from '../styles';

// COMPONENTS
import Layout from '../Layout';
import SignIn from '../components/SignIn';

/*
  <Box fill align="center" justify="center"
            style={{
              alignItems: 'center',
              align: 'center',
              justify: 'center',
              textAlign:'center'
            }}
          >
*/

class Index extends Component {
  render() {
    return (
      <Layout
        left={null}
        right={null}
      >
        <Box align='center'>
          <SignIn />
        </Box>
      </Layout>
    );
  }
}

export default Index;
