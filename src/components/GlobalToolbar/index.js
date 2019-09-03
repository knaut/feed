// IMPORTS
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// COMPONENTS
import {
  Box,
  Button,
  Image,
  Heading,
  Text,
  Anchor
} from 'grommet'
import MyProfile from './MyProfile'
import Search from './Search'
import MyFeed from './MyFeed'
import Circles from './Circles'

import SignOut from '../SignOut/Button'

// STYLES
import css from '@emotion/css'

function mapStateToProps (state, ownProps) {
  const {
    isAuthenticated
  } = state.blockstack

  const {
    blockstackUserIsAuthor
  } = ownProps

  return {
    isAuthenticated,
    blockstackUserIsAuthor
  }
}

class UserToolbar extends Component {
  render () {
    const {
      isAuthenticated,
      blockstackUserIsAuthor
    } = this.props

    return (
      <Box fill>
        { isAuthenticated === true ? (
            <React.Fragment>
              <MyFeed />
              <MyProfile />
              <Circles/>
            </React.Fragment>
          ) : null
        }
        <Search />
        {
          isAuthenticated === true ? (
            <Box margin={{horizontal: 'medium', bottom: 'medium'}} css={
              css`
                position: fixed;
                bottom: 0;
                right: 0;
              `
            }>
              <SignOut/>
            </Box>
          ) : null
        }
      </Box>
    )
  }
}

export default connect(mapStateToProps)(UserToolbar)
