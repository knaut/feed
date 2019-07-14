// IMPORTS
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// COMPONENTS
import {
  Box,
  Button,
  Image,
  Heading,
  Text,
  Anchor
} from 'grommet'
import {
  Login
} from 'grommet-icons'

import GoToYourFeed from './GoToYourFeed'
import InitialSignIn from './InitialSignIn'
import LoadingAuth from './LoadingAuth'

/*
  This should be a drop-in global Sign In component
  that works on any screen or component it goes in.
*/

const mapStateToProps = (state) => {  
  return {
    ...state.blockstack,
    hasFeed: state.Status.length ? true : true
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      // initialSignIn: UserActions.initialSignIn
    }, dispatch)
  }
}

class SignIn extends Component {
  onClick = () => {
    /*
    const origin = window.location.origin;

    const userSession = new blockstack.UserSession()

    userSession.redirectToSignIn(
      origin,
      origin + '/manifest.json',
      ['store_write', 'publish_data']
    );
    */
  }

  initialSignIn = () => {
    /*
    const { id } = this.props;
    this.props.actions.initialSignIn({
      username: id
    });
    */
  }

  render() {
    const {
      id,
      hasFeed,

      isAuthenticated,
      isAuthenticating,
    } = this.props

    if (isAuthenticating) {
      return <LoadingAuth/>
    }

    if (isAuthenticated && hasFeed) {
      return (
        <GoToYourFeed
          username={id}
          feedPath={`/${id}`}
        />
      )
    } else if (isAuthenticated && !hasFeed) {
      return (
        <InitialSignIn
          username={id}
          feedPath={`/${id}`}
          initialSignIn={this.initialSignIn}
        />
      )
    } else {
      return (
        <Box pad='medium'>
          <Button icon={<Login />} label="Sign in with your Blockstack ID" onClick={this.onClick} primary />
        </Box>
      )
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);