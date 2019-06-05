// IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux'

// COMPONENTS
import {
  Card
} from 'reactstrap';
import { LoremIpsum } from 'lorem-ipsum';

// MODELS
import Status from '../../../src/models/Status';



function mapStateToProps(state) {
  const { Status, Profile, user, router } = state
  const author = user
  const regx = /\/(.*)\/feed\//
  const pathUsername = regx.exec( router.location.pathname )
  console.log(pathUsername)
  if (pathUsername) {

    // slice out the ids of our statuses
    const postIds = Profile.entities[
      user.username
    ].Status

    const posts = []
    for (let p = 0; postIds.length > p; ++p) {
      // filter out the statuses that match our ids
      if ( Status.entities[ postIds[p] ] ) {
        const { timestamp, text } = Status.entities[ postIds[p] ]
        const statusObj = {
          timestamp,
          text,
          author
        }

        posts.push(
          statusObj
        )
      }
    }

    return {
      author,
      posts,
      username: user.username
    }

  } else {
    return {
      author: {},
      posts: [],
      username: state.user.username
    }
  }
}

class PostListProvider extends Component {
  render() {
    console.log(this)

    const children = React.Children.map( this.props.children, child => {
      return React.cloneElement(child, {
        ...child.props,
        ...this.props
      })
    });

    return (
      <React.Fragment>
        { children }
      </React.Fragment>
    );

    
  }
}

export default connect(mapStateToProps, () => new Object())(PostListProvider)
