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


class StateSwitcher extends Component {
  render() {
    if (process.env.DEBUG) console.log(this)

    const {
      id,
      isAuthenticated,
      isAuthenticating,
      hasFeed,
      cacheIsLoading,
      cacheIsLoaded,
      onClick
    } = this.props

      if ( ( isAuthenticating || cacheIsLoading ) && !cacheIsLoaded ) {

        return <LoadingAuth/>
        
      } else if (isAuthenticated && !cacheIsLoaded) {

        return <LoadingAuth/>
        
      } else {

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
            />
          )
        } else {
          return (
            <Box pad='medium'>
              <Button icon={<Login />} label="Sign in with your Blockstack ID" onClick={onClick} primary />
            </Box>
          )
        }

      }

      return null
  }
}


export default StateSwitcher