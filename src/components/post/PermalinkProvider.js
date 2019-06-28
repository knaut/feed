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
  return state
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

    const { Status, id } = this.props
    const username = Status.entities[id].Profile

    this.setState({ username })

    try {
      const blockstackUser = await blockstack.lookupProfile(`${username}.id.blockstack`)
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
      user,
      id
    } = this.props

    const author = this.state

    const post = Status.entities[ id ]
    author.username = post.Profile

    const children = React.Children.map( this.props.children, child => {
      return React.cloneElement(child, {
        ...child.props,
        post,
        author,
        user
      })
    })

    return children
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PermalinkProvider)