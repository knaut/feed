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

const mapStateToProps = (state, ownProps) => {
  return {
    state,
    ownProps
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: /*bindActionCreators({})*/ {}
})

class BlockstackProvider extends Component {
  async componentDidMount() {
    
    const session = new blockstack.UserSession()
    const isSignedIntoBlockstack = session.isUserSignedIn()
    const isSignInPending = session.isSignInPending()
    console.log({ session, isSignedIntoBlockstack, isSignInPending })
    // try {
    //   const url = await blockstack.getUserAppFileUrl('cache.json', 'daanderson.id.blockstack', 'https://www.feed-app.net')
    //   console.log({url})
    // } catch (error) {
    //   console.log(error)
    // }
  }

  render() {
    console.log(this)
    // return this.props.children ? this.props.children : null
    return <GlobalLoader isLoading/>
  }  
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(BlockstackProvider)