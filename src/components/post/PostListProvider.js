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

class PostListProvider extends Component {
  getPosts = (ids, entities, author) => {
    const posts = []

    for (let p = 0; ids.length > p; ++p) {
      // filter out the statuses that match our ids
      const entity = entities[ ids[p] ]
      console.log(entity)
      if ( entity ) {
        const { timestamp, text } = entity
        const statusObj = {
          timestamp,
          text,
          author,
          id: ids[p]
        }

        posts.push(
          statusObj
        )
      }
    }

    return posts
  }

  render() {
    const { Status, Profile, username, user } = this.props

    const author = {}

    let postIds = []
    let posts = []

    // optimistically check if it is us
    if ( username === user.username ) {

      author.username = username
      author.image = user.image
      author.name = user.name
      author.isOnBlockstack = true

      // slice out the ids of our statuses
      postIds = Profile.entities[username].Status

      posts = this.getPosts(postIds, Status.entities, user)

      const children = React.Children.map( this.props.children, child => {
        return React.cloneElement(child, {
          ...child.props,
          posts,
          author,
          username
        })
      });

      return (
        <React.Fragment>
          { children }
        </React.Fragment>
      );

    } else if ( Profile.entities[username] ) {

      author.username = username
      author.image = Profile.entities[username].image
      author.name = Profile.entities[username].name
      author.isOnBlockstack = true

      // slice out the ids of our statuses
      postIds = Profile.entities[username].Status

      posts = this.getPosts(postIds, Status.entities, user)

      const children = React.Children.map( this.props.children, child => {
        return React.cloneElement(child, {
          ...child.props,
          posts,
          author,
          username
        })
      });

      return (
        <React.Fragment>
          { children }
        </React.Fragment>
      );
    
    } else {

      return <h1>No posts for someone with the blockstack id of "{username}"</h1>
    
    }

    

    
  }
}

export default connect(mapStateToProps, () => new Object())(PostListProvider)
