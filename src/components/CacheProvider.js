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
import * as CacheActions from '../actions/cache'

const mapStateToProps = (state, ownProps) => {
  const userToFetch = ownProps.id
  const userIsMe = state.blockstack.id

  const {
    isLoaded,
    isLoading
  } = state.cache

  return {
    state,
    ownProps,
    
    userToFetch,
    userIsMe
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    // fetchCache: CacheActions.fetchCache,
  }, dispatch)
})

class CacheProvider extends Component {
  state = {
    cache: false
  }

  async componentDidMount() {
    const {
      userToFetch,
      userIsMe,

      isLoaded
    } = this.props

    if (!isLoaded) {
      const cache = await CacheActions.fetchCache(userToFetch, userIsMe)
      this.setState({
        cache
      })
    }

  }

  render() {
    console.log(this)
    const {
      cache
    } = this.state

    // return this.props.children ? this.props.children : null
    const children = React.Children.map( this.props.children, child => {
      return React.cloneElement(child, {
        ...child.props,
        cache
      })
    });

    return children
    
  }  
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(CacheProvider)