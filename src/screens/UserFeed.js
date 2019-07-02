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

import WrappedAddPost from '../components/button/WrappedAddPost'
import MyProfile from '../components/button/MyProfile'
import Search from '../components/button/Search'
import MyFeed from '../components/button/MyFeed'

import UserToolbar from '../components/UserToolbar'

function mapStateToProps (state, ownProps) {
  const username = state.user.username
  const author = ownProps.match.params.author

  return {
    username,
    author
  }
}

class UserFeed extends Component {
  render() {
    const {
      author,
      username
    } = this.props

    const userIsAuthor = author === username ? true : false

    return (
      <Layout
        left={ userIsAuthor === true ? <WrappedAddPost/> : null }
        right={<UserToolbar/>}
      >
        <GlobalLoaderProvider>
          { userIsAuthor === true ? <WrappedSlate /> : null }
          <Box margin={{top: 'medium'}}>
            <PostListProvider 
              author={author}
              username={this.props.username}
            >
              <PostList/>
            </PostListProvider>
          </Box>
        </GlobalLoaderProvider>
      </Layout>
    )
  }
}

export default connect(mapStateToProps, () => new Object() )(UserFeed)