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
    console.log(this.props)
    console.log(blockstack)

    const session = new blockstack.UserSession()
    const isSignedIntoBlockstack = session.isUserSignedIn()
    const isSignInPending = session.isSignInPending()

    console.log({ session, isSignedIntoBlockstack, isSignInPending })
    
    try {
      const url = await blockstack.getUserAppFileUrl('cache.json', 'daanderson.id.blockstack', 'https://www.feed-app.net')
      console.log({url})
    } catch (error) {
      console.log(error)
    }
  }

  render() {

    return this.props.children ? this.props.children : null
  }  
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(BlockstackProvider)