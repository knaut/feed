// IMPORTS
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as blockstack from 'blockstack'


// COMPONENTS
import {
  Card
} from 'reactstrap';

// ACTIONS
import { loadUser } from '../../actions/user'

// MODELS
import Profile from '../../models/Profile'


function mapStateToProps(state) {
  const {
    Status,
    Profile,
    user
  } = state
  
  return {
    Status,
    Profile,
    username: user.username
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      loadUser
    }, dispatch)
  }
}

class PermalinkProvider extends Component {
  state = {
    name: null,
    image: null
  }

  async componentDidMount() {
    console.log(this)

    const { postId, Status } = this.props
    const postAuthor = Status.entities[postId].Profile

    try {
      const blockstackUser = await blockstack.lookupProfile(`${postAuthor}.id.blockstack`)
      const name = blockstackUser.name
      const image = blockstackUser.image[0].contentUrl

      this.setState({
        name,
        image
      })

    } catch (error) {
      console.error(error)
    }

  }

  render() {
    const {
      Status, 
      Profile, 
      username,

      postId
    } = this.props

    const {
      name,
      image
    } = this.state

    const post = Status.entities[ postId ]

    const author = {
      username: post.Profile,
      name,
      image
    }

    const children = React.Children.map( this.props.children, child => {
      return React.cloneElement(child, {
        ...child.props,
        post,
        author,
        username,
        isPermalinked: true
      })
    })

    return children
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PermalinkProvider)