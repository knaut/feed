// IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux'

// COMPONENTS
import {
  Card
} from 'reactstrap';

function mapStateToProps(state) {
  return state
}

class PermalinkProvider extends Component {
  render() {
    const {
      Status, 
      Profile, 
      username,
      user,
      id
    } = this.props

    console.log(this)

    const author = {
      image: false,
      name: user.name
    }

    const post = Status.entities[ id ]
    author.username = post.Profile

    // optimistically checking the logged in user's cached image
    if (author.username = user.username) {
      author.image = user.image
    }

    const children = React.Children.map( this.props.children, child => {
      return React.cloneElement(child, {
        ...child.props,
        post,
        author,
        username
      })
    })

    return (
      <React.Fragment>
        { children }
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, () => new Object())(PermalinkProvider)