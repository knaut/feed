// IMPORTS
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// COMPONENTS
import MyProfile from '../components/button/MyProfile'
import Search from '../components/button/Search'
import MyFeed from '../components/button/MyFeed'

function mapStateToProps(state) {
  const { isAuthenticated } = state.user
  return {
    isAuthenticated
  }
}

class UserToolbar extends Component {
  render() {
    const {
      isAuthenticated
    } = this.props

    return (
      <React.Fragment>
        { isAuthenticated === true ? (
            <React.Fragment>
              <MyFeed/>
              <MyProfile/>
            </React.Fragment>
          ) : null
        }
        <Search/>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps)(UserToolbar)