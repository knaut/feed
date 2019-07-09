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
  return {
    blockstackUser: state.blockstack,
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

    username: this.props.author,  // prop provided from the router
    image: null,
    name: null,
    description: null,
  }

  async componentDidMount() {
    const {
      author,
      blockstackUserIsAuthor,
      blockstackUser
    } = this.props

    if (blockstackUserIsAuthor) {
      // it's us! use our local store data
      const { name, description, id, image } = blockstackUser

      this.setState({
        isLoading: false,
        isOnBlockstack: true,
        isOnFeed: true, // change this later, dont assume the logged in user is on Feed
        isMe: true,

        username: id, // legacy
        image,
        description,
        name
      })

    } else {
      // it's someone else's profile. load it.
      // optimistically fetch a cache url to check if they're on Feed
      try {
        // load author's blockstack profile
        const authorObj = await blockstack.lookupProfile(`${author}.id.blockstack`)

        const name = authorObj.name ? authorObj.name : author
        const username = author
        const description = authorObj.description
        const image = authorObj.image ? authorObj.image[0].contentUrl : false

        let isOnFeed = false
        try {
          const response = await blockstack.getUserAppFileUrl('cache.json', `${author}.id.blockstack`, process.env.DOMAIN)
          console.log(response)
          if (response) {
            isOnFeed = true
          }

          let isMe = blockstackUserIsAuthor

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

      } catch (error) {
        console.error(error)

        this.setState({
          isLoading: false,
          isOnBlockstack: false,
          isOnFeed: false
        })
      }

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