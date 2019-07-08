// IMPORTS
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// COMPONENTS
import GoToYourFeed from './GoToYourFeed'
import InitialSignIn from './InitialSignIn'
import LoadingAuth from './LoadingAuth'

/*
  This should be a drop-in global Sign In component
  that works on any screen or component it goes in.
*/

const mapStateToProps = (state) => {
  /*
  const {
    isAuthenticating,
    isAuthenticated
  } = state.user

  const cacheIsLoaded = state.cache.isLoaded

  const user = isAuthenticated && cacheIsLoaded ? state.user : false
  const id = isAuthenticated && cacheIsLoaded ? state.user.username.split('.')[0] : false
  const hasFeed = isAuthenticated && cacheIsLoaded ? state.Profile.entities.hasOwnProperty(id) : false
  */
  return {
    /*
    cacheIsLoaded,

    user,
    hasFeed,
    id,

    isAuthenticated,
    isAuthenticating
    */
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
      isAuthenticated,
      isAuthenticating,

      user,
      hasFeed,
      id,

      feedPath,
      
      cacheIsLoaded
    } = this.props

    // this line should be fixed, make it a prop
    // const feedPath = `${this.props.user.username}/feed`;

    if (!isAuthenticating && !cacheIsLoaded) {
      return <LoadingAuth/>
    }

    if (isAuthenticated && hasFeed) {
      return (
        <GoToYourFeed
          username={user.username}
          feedPath={feedPath}
        />
      )
    } else if (isAuthenticated && !hasFeed) {
      return (
        <InitialSignIn
          username={user.username}
          feedPath={feedPath}
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