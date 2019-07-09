// IMPORTS
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as blockstack from 'blockstack';

// COMPONENTS
import Card from './Card'

// ACTIONS
import * as ProfileActions from '../../actions/profile'

// MODELS
// import Profile from '../../models/Profile'

const mapStateToProps = (state, ownProps) => {
  const { author, blockstackUserIsAuthor } = ownProps
  return {
    profile: state.profile,
    blockstackUser: state.blockstack,
    author,
    blockstackUserIsAuthor,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      loadProfile: ProfileActions.loadProfile
    }, dispatch)
  }
}

class ProfileCard extends Component {
  componentDidMount() {
    this.props.actions.loadProfile(this.props)
  }

  render() {
    console.log(this)
    return (
      <React.Fragment>
        <Card { ...this.props.profile }/>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard)