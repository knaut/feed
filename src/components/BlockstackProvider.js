// IMPORTS
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

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
  componentDidMount() {
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

    // try {
    //   const url = await blockstack.getUserAppFileUrl('cache.json', 'daanderson.id.blockstack', 'https://www.feed-app.net')
    //   console.log({url})
    // } catch (error) {
    //   console.log(error)
    // }
  }

  render() {
    console.log(this)
    const {
      isAuthenticating
    } = this.props
    // return this.props.children ? this.props.children : null
    return isAuthenticating ? <GlobalLoader isLoading/> : (
      <GlobalLoader isLoading/>
    )
  }  
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(BlockstackProvider)