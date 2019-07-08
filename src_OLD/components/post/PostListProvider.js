// IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as blockstack from 'blockstack'

// COMPONENTS
import {
  Box,
  Heading
} from 'grommet';

function mapStateToProps(state, ownProps) {
  const {
    Status,
    Profile,
    user
  } = state

  const username = ownProps.username

  const {
    postAuthor,
    userIsAuthor
  } = ownProps

  return {
    Status,
    Profile,
    username,
    user,
    userIsAuthor,
    postAuthor
  }
}

class PostListProvider extends Component {
  /*
    this component only delivers one user's feed
    as a list of posts available for anyone to view
  */
  state = {
    name: null,
    image: null
  }

  async componentDidMount() {
    const {
      // cache props
      Status,
      Profile,
      user,

      // auth props
      userIsAuthor, // whether logged in user is author of post
      postAuthor    // username of the post list author
    } = this.props

    // need to fetch the user's avatar src
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

  getPosts = (ids, entities, author) => {
    const posts = []

    for (let p = 0; ids.length > p; ++p) {
      // filter out the statuses that match our ids
      const entity = entities[ ids[p] ]
      
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
    const {
      Status,
      Profile,
      user,
      username,
      userIsAuthor,
      postAuthor
    } = this.props

    const {
      name,
      image
    } = this.state

    const author = {}

    let postIds = []
    let posts = []

    // optimistically check if it is us
    if ( userIsAuthor === true ) {

      author.username = username
      author.name = user.name
      author.image = image
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

    // if not, check if it's a user who is on feed
    } else if ( Profile.entities[postAuthor] ) {

      author.username = postAuthor
      author.name = name
      author.image = image
      author.isOnBlockstack = true

      // slice out the ids of our statuses
      postIds = Profile.entities[postAuthor].Status

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
    
    // if not, it's someone who has never logged into feed, or possibly blockstack
    } else {

      return (
        <Box
          align='center'
          justify='center'
        >
          <Heading level={4} color='purplePastel' textAlign='center'>
            {`No posts for someone with the blockstack id of "${ postAuthor }"`}
          </Heading>
        </Box>
      )
    }

    

    
  }
}

export default connect(mapStateToProps, () => new Object())(PostListProvider)