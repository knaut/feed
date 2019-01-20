// IMPORTS
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as blockstack from 'blockstack';

// COMPONENTS
import { Grommet, Box, Button, Paragraph, Anchor, Text } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Login, LinkNext } from "grommet-icons";
import { Link } from 'react-router-dom';

// STYLES
import styles from '../styles';

// ACTIONS
import * as UserActions from '../actions/user';

function mapStateToProps(state) {
  const id = state.user.username.split('.')[0];
  const hasFeed = state.Profile.hasOwnProperty(id);
  
  return {
    user: state.user,
    hasFeed,
    id
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      initialSignIn: UserActions.initialSignIn
    }, dispatch)
  }
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

  initialSignIn = () => {
    const { id } = this.props;
    this.props.actions.initialSignIn({
      username: id
    });
  }

  renderEntry = () => {
    const feedPath = `/${this.props.id}/feed`;

    if (this.props.user.isAuthenticated && this.props.hasFeed) {
      return (
        <Box align="center" pad="small" gap="small">
          <Paragraph style={{
            color: styles.colors.pastels.cyan
          }}>Welcome back, <Anchor label={this.props.user.username} href="https://browser.blockstack.org/profiles" />.
          </Paragraph>
          <Link to={feedPath}>
            <Button icon={<LinkNext />} label="go to your feed" primary style={{
              background: 'transparent'
            }}/>
          </Link>
        </Box>
      )
    } else if (this.props.user.isAuthenticated && !this.props.hasFeed) {
      return (
        <Box align="center" pad="small" gap="small">
          <Paragraph margin={{bottom: 'none'}} style={{
            color: styles.colors.pastels.cyan
          }}>Welcome, <Anchor label={this.props.user.username} href="https://browser.blockstack.org/profiles" />. New to feed?
          </Paragraph>
          <Paragraph margin={{top: 'none'}} style={{
            color: styles.colors.pastels.cyan
          }}>Sign in for the first time to get started!</Paragraph>
          <Link to={feedPath} onClick={this.initialSignIn}>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);