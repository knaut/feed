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

import GlobalLoaderProvider from '../components/GlobalLoaderProvider'

// STYLES
import styles from '../styles'

function mapStateToProps (state) {
  const username = state.user.username

  return {
    username
  }
}

class UserFeed extends Component {
  render() {
    return (
      <Layout>
        <GlobalLoaderProvider>
          <WrappedSlate />
          <PostListProvider username={this.props.match.params.username}>
            <PostList/>
          </PostListProvider>
        </GlobalLoaderProvider>
      </Layout>
    )
  }
}

export default connect(mapStateToProps, () => new Object() )(UserFeed)