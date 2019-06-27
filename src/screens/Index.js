// IMPORTS
import React, { Component } from 'react';
import { Grommet, Box, Button } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Login } from "grommet-icons";

// COMPONENTS
import Layout from '../Layout';
import SignIn from '../components/SignIn';

class Index extends Component {
  render() {
    return (
      <Layout
        left={null}
        right={null}
        columns={false}
      >
        <Box
          fill
          align='center'
          justify='center'
        >
          <SignIn />
        </Box>
      </Layout>
    );
  }
}

export default Index;
