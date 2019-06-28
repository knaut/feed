// IMPORTS
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as blockstack from 'blockstack';

// COMPONENTS
import Card from './Card'

// ACTIONS
import * as UserActions from '../../actions/user'

// MODELS
import Profile from '../../models/Profile'

function mapStateToProps(state) {
  return {
    username: state.user.username
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      loadUser: UserActions.loadUser
    }, dispatch)
  }
}

class ProfileLoader extends Component {
  state = {
    isLoading: true,
    isOnBlockstack: null,
    isOnFeed: null,
    isMe: this.props.me === this.props.username,

    username: this.props.username,  // prop provided from the router
    image: null,
    name: null,
    description: null,
  }

  async componentDidMount() {
    const {
      username
    } = this.props

    try {
      // load blockstack profile
      const blockstackUser = await blockstack.lookupProfile(`${username}.id.blockstack`)

      const name = blockstackUser.name
      const description = blockstackUser.description
      const image = blockstackUser.image[0].contentUrl

      // load our cached user profile
      let isOnFeed = false

      const profile = new Profile({
        username
      });

      const entity = await profile.load()

      if (entity) {
        isOnFeed = true
      }

      this.setState({
        isLoading: false,
        isOnBlockstack: true,
        isOnFeed,
        image,
        name,
        description
      })

    } catch (error) {
      console.error(error)

      this.setState({
        isLoading: false,
        isOnBlockstack: false,
        isOnFeed: false,
      })
    }
    
  }

  render() {
    return (
      <React.Fragment>
        <Card { ...this.state }/>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileLoader)