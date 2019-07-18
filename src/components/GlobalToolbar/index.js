// IMPORTS
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// COMPONENTS
import MyProfile from './MyProfile'
import Search from './Search'
import MyFeed from './MyFeed'
import SignOut from '../SignOut/Pill'

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
      <React.Fragment>
        { isAuthenticated === true ? (
            <React.Fragment>
              <MyFeed />
              <MyProfile />
            </React.Fragment>
          ) : null
        }
        <Search />
        {/*
          isAuthenticated === true ? (
            <SignOut />
          ) : null
        */}
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps)(UserToolbar)
