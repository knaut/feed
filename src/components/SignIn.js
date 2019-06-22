// IMPORTS
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as blockstack from 'blockstack';

// COMPONENTS
import {
  Grommet,
  Box,
  Button,
  Paragraph,
  Anchor,
  Text,
  Heading
} from 'grommet';
import { Login, LinkNext } from "grommet-icons";
import { Link } from 'react-router-dom';

// STYLES
import css from '@emotion/css'

// ACTIONS
import * as UserActions from '../actions/user';

function mapStateToProps(state) {
  const id = state.user.username.split('.')[0];
  const hasFeed = state.Profile.entities.hasOwnProperty(id);
  
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
    const feedPath = `${this.props.user.username}/feed`;

    if (this.props.user.isAuthenticated && this.props.hasFeed) {
      return (
        <Box align="center" pad="small" gap="small">
          <Paragraph color='cyanPastel'>
            Welcome back, <Anchor label={this.props.user.username} href="https://browser.blockstack.org/profiles" />.
          </Paragraph>
          <Link to={feedPath}>
            <Button icon={<LinkNext />} label="go to your feed" primary/>
          </Link>
        </Box>
      )
    } else if (this.props.user.isAuthenticated && !this.props.hasFeed) {
      return (
        <Box align="center" pad="small" gap="small">
          <Paragraph margin={{bottom: 'none'}} color='cyanPastel'>
            Welcome, <Anchor label={this.props.user.username} href="https://browser.blockstack.org/profiles" />. New to feed?
          </Paragraph>
          <Paragraph margin={{top: 'none'}} color='cyanPastel'>
            Sign in for the first time to get started!
          </Paragraph>
          <Link to={feedPath} onClick={this.initialSignIn}>
            <Button icon={<LinkNext />} label="go to your feed" primary/>
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
            <Heading level={1}>
              welcome to <strong color='purple'>feed</strong> 🌱.
            </Heading>
            <Text color='purple'>feed is a decentralized social network powered by blockchain technology.</Text>
            {this.renderEntry()}
          </header>
        </Box>
      </Box>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);