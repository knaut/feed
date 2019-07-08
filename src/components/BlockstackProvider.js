// IMPORTS
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as blockstack from 'blockstack'

// COMPONENTS
import {
  Box,
  Button,
  FormField,
  TextInput
} from 'grommet';
import { Search as SearchIcon } from 'grommet-icons';
import GlobalLoader from './GlobalLoader'

// STYLES
import css from '@emotion/css'

// UTILS
import getLocalBlockstackUser from '../utils/getLocalBlockstackUser'

// ACTIONS
import * as BlockstackActions from '../actions/blockstack'

const mapStateToProps = (state, ownProps) => {
  const {
    isAuthenticating
  } = state.blockstack

  return {
    isAuthenticating
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    isSignedIn: BlockstackActions.isSignedIn,
    isSignInPending: BlockstackActions.isSignInPending,
    isNotSignedIn: BlockstackActions.isNotSignedIn
  }, dispatch)
})

class BlockstackProvider extends Component {
  async componentDidMount() {
    const localUser = getLocalBlockstackUser()

    const {
      isSignedIntoBlockstack,
      isSignInPending,
      userData
    } = localUser

    if (isSignInPending) {
      // branch based on whether the user was just signing in
      this.props.actions.isSignInPending()
    } else {
      // we're not signing in, check if we're authed
      if (isSignedIntoBlockstack) {
        this.props.actions.isSignedIn(userData)
      } else {
        // we're not signed in
        this.props.actions.isNotSignedIn()
      }
    }
  }

  render() {
    console.log(this)
    const {
      isAuthenticating
    } = this.props

    return this.props.children ? this.props.children : null
    
  }  
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(BlockstackProvider)