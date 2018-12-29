// IMPORTS
import React, { Component } from 'react';
import * as blockstack from 'blockstack';
import { Grommet, Box, Button } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Login } from "grommet-icons";

// STYLES
import styles from '../styles';

class SignIn extends Component {
  onClick = () => {
    blockstack.redirectToSignIn(
      `${window.location.origin}`,
      `${window.location.origin}/manifest.json`,
      ['DEFAULT_SCOPE']
    );
  }

  render() {
    return (
      <Box pad={{ horizontal: 'xlarge', vertical: 'large' }}>
        <Box>
          <header>
            <h1
              style={{
                color: styles.colors.pastels.purple
              }}
            >
              welcome to <strong style={{
                color: styles.colors.primaries.purple
              }}>feed</strong>.
            </h1>
            <p style={{color: styles.colors.pastels.purple}}>feed is a decentralized social network powered by blockchain technology.</p>
            <Box align="center" pad="large" gap="small">
              <Button icon={<Login />} label="Sign in with your Blockstack ID" onClick={this.onClick} primary />
            </Box>
          </header>
        </Box>
      </Box>
    );
  }
};

export default SignIn;