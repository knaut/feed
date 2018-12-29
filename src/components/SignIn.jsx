// IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as blockstack from 'blockstack';
import { Grommet, Box, Button, Paragraph, Anchor, Text } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Login, LinkNext } from "grommet-icons";
import { Link } from 'react-router-dom';

// STYLES
import styles from '../styles';

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

class SignIn extends Component {
  onClick = () => {
    const origin = window.location.origin;
    blockstack.redirectToSignIn(
      origin,
      origin + '/manifest.json',
      ['store_write', 'publish_data']
    );
  }

  renderEntry = () => {
    if (this.props.user.isAuthenticated) {
      return (
        <Box align="center" pad="small" gap="small">
          <Paragraph style={{
            color: styles.colors.pastels.cyan
          }}>Welcome back, <Anchor label={this.props.user.username} href="https://browser.blockstack.org/profiles" />.
          </Paragraph>
          <Link to="/feed">
            <Button icon={<LinkNext />} label="go to your feed" primary style={{
              background: 'transparent'
            }}/>
          </Link>
        </Box>
      )
    } else {
      return (
        <Box align="center" pad="large" gap="small">
          <Button icon={<Login />} label="Sign in with your Blockstack ID" onClick={this.onClick} primary />
        </Box>
      )
    }
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
              }}>feed</strong> 🌱.
            </h1>
            <p style={{color: styles.colors.pastels.purple}}>feed is a decentralized social network powered by blockchain technology.</p>
            {this.renderEntry()}
          </header>
        </Box>
      </Box>
    );
  }
};

export default connect(mapStateToProps)(SignIn);