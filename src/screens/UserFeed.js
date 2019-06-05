// IMPORTS
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// COMPONENTS
import { Grommet, Box, Button, Grid, TextArea } from 'grommet';
import Layout from '../Layout'
import PostList from '../components/post/List'
import PostListProvider from '../components/post/PostListProvider'
import WrappedSlate from '../components/slate/WrappedSlate'

// STYLES
import styles from '../styles'

function mapStateToProps(state) {
  const author = {
    user: state.user,
    author: state.user
  }

  // slice out the ids of our statuses
  const postIds = state.Profile.entities[
    state.user.username
  ].Status

  console.log(postIds)

  const posts = []

  for (let p = 0; postIds.length > p; ++p) {
    // filter out the statuses that match our ids
    if (postIds[p] === state.Status.entities[ postIds[p] ]) {
      posts.push(
        state.Status.entities[ postIds[p] ]
      )
    }
  }

  return {
    author,
    posts
  }
}

class UserFeed extends Component {
  render() {
    console.log(this)
    const username = this.props.user.username

    return (
      <Layout>
        <WrappedSlate />
        <PostList/>
      </Layout>
    )
  }
}

export default connect(mapStateToProps, () => new Object() )(UserFeed)