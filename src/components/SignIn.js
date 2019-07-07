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
  Heading,
  Image
} from 'grommet';
import { Login, LinkNext, Grow } from "grommet-icons";
import { Link } from 'react-router-dom';

// STYLES
import css from '@emotion/css'

// ACTIONS
import * as UserActions from '../actions/user';

// ASSETS
import fleafImage from '../../assets/Feed_Fleaf_100h.png'

function mapStateToProps(state) {
  if (!state.cache.isLoaded) {
    return {
      user: false,
      hasFeed: false,
      id: false
    }
  } else {
    const id = state.user.username.split('.')[0];
    const hasFeed = state.Profile.entities.hasOwnProperty(id);
    
    return {
      user: state.user,
      hasFeed,
      id
    }
  }
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

    const userSession = new blockstack.UserSession()

    userSession.redirectToSignIn(
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
        <Box>
          <Box pad='small'>
            <Text color='cyanPastel'>
              Welcome back, <Anchor label={this.props.user.username} href="https://browser.blockstack.org/profiles" />.
            </Text>
          </Box>
          <Box pad='small'>
            <Link to={feedPath}>
              <Button icon={<LinkNext />} label="go to your feed" primary/>
            </Link>
          </Box>
        </Box>
      )
    } else if (this.props.user.isAuthenticated && !this.props.hasFeed) {
      return (
        <Box>
          <Box pad='small' align='center'>
            <Text color='cyanPastel' textAlign='center'>
              Welcome, <Anchor label={this.props.user.username} href="https://browser.blockstack.org/profiles" />. New to feed?
            </Text>
            <Text color='cyanPastel' textAlign='center'>
              Sign in for the first time to get started!
            </Text>
          </Box>
          <Box pad='small' align='center'>
            <Link to={feedPath} onClick={this.initialSignIn}>
              <Button icon={<LinkNext />} label="go to your feed" primary/>
            </Link>
          </Box>
        </Box>
      )
    } else {
      return (
        <Box pad='medium'>
          <Button icon={<Login />} label="Sign in with your Blockstack ID" onClick={this.onClick} primary />
        </Box>
      )
    }
  }

  render() {
    return (
      <Box align='center'>
        <Image src={fleafImage}/>
        <Heading level={1}>
          <span css={css`color: var(--purplePastel);`}>welcome to</span> <strong css={css`color: var(--purple);`}>feed</strong>
        </Heading>
        <Text color='light' textAlign='center' size='medium'><span css={css`font-weight: bold;`}>feed</span> is a social networking utility powered by blockchain.</Text>
        {this.renderEntry()}
      </Box>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);