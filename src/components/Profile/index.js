// IMPORTS
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as blockstack from 'blockstack';

// COMPONENTS
import Card from './Card'

// ACTIONS
// import * as BlockstackActions from '../../actions/blockstack'

// MODELS
// import Profile from '../../models/Profile'

const mapStateToProps = (state, ownProps) => {
  const { author, blockstackUserIsAuthor } = ownProps
  const {
    blockstack
  } = state
  return {
    blockstack,
    author,
    blockstackUserIsAuthor
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      // loadUser: BlockstackActions.loadUser
    }, dispatch)
  }
}

class ProfileLoader extends Component {
  state = {
    isLoading: true,
    isOnBlockstack: null,
    isOnFeed: null,
    isMe: false,

    username: this.props.blockstackId,  // prop provided from the router
    image: null,
    name: null,
    description: null,
  }

  async componentDidMount() {
    const {
      author,
      blockstackUserIsAuthor,
      blockstack
    } = this.props

    if (blockstackUserIsAuthor) {
      // it's us! use our local store data
      const { name, description, id, image } = blockstack

      this.setState({
        isLoading: false,
        isOnBlockstack: true,
        isOnFeed: true, // change this later
        isMe: true,
        
        username: id, // legacy
        image,
        description,
        name
      })
    }

/*
    try {
      // load blockstack profile
      const blockstackUser = await blockstack.lookupProfile(`${username}.id.blockstack`)

      const name = blockstackUser.name
      const description = blockstackUser.description
      const image = blockstackUser.image[0].contentUrl

      // load our cached user profile
      let isOnFeed = false

      // const profile = new Profile({
      //   username: blockstackId
      // });

      // const entity = await profile.load()

      if (entity) {
        isOnFeed = true
      }

      let isMe = false
      if (blockstackId === username) {
        isMe = true
      }

      this.setState({
        isLoading: false,
        isOnBlockstack: true,
        isOnFeed,
        isMe,
        image,
        name,
        description
      })

    } catch (error) {
      console.error(error)

      this.setState({
        isLoading: false,
        isOnBlockstack: false,
        isOnFeed: false
      })
    }
*/
  }

  render() {
    console.log(this)

    return (
      <React.Fragment>
        <Card { ...this.state }/>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileLoader)