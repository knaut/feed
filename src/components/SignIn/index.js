// IMPORTS
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as blockstack from 'blockstack'

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
import StateSwitcher from './StateSwitcher'
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

  const hasFeed = state.blockstack.isAuthenticated && state.Status.ids.length ? true : false
  const cacheIsLoaded = state.Cache.isLoaded
  const cacheIsLoading = state.Cache.isLoading

  return {
    ...state.blockstack,
    hasFeed,
    cacheIsLoaded,
    cacheIsLoading
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

  render() {
    const {
      id,

      isAuthenticated,
      isAuthenticating,

      hasFeed,
      cacheIsLoaded,
      cacheIsLoading
    } = this.props

    return <StateSwitcher {...this.props} onClick={this.onClick} />
    
    

    
  }
};

export default connect(mapStateToProps, {})(SignIn);