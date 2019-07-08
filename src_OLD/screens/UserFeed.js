// IMPORTS
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// STYLES
import css from '@emotion/css'

// COMPONENTS
import { Grommet, Box, Button, Grid, TextArea } from 'grommet'
import Layout from '../Layout'
import PostList from '../components/post/List'
import PostListProvider from '../components/post/PostListProvider'
import WrappedSlate from '../components/slate/WrappedSlate'

import GlobalLoader from '../components/GlobalLoaderProvider'

import WrappedAddPost from '../components/button/WrappedAddPost'
import MyProfile from '../components/button/MyProfile'
import Search from '../components/button/Search'
import MyFeed from '../components/button/MyFeed'

import UserToolbar from '../components/UserToolbar'

const DEBUG = process.env.DEBUG

const mapStateToProps = (state, ownProps) => {
  const username = state.user.username
  const author = ownProps.match.params.author

  return {
    username,
    author
  }
}

class UserFeed extends Component {
  render () {
    if (DEBUG) console.log(this)

    const {
      author,
      username
    } = this.props

    const userIsAuthor = author === username

    return (
      <Layout
        left={
          /*
            block the add post button from displaying
            if the logged in user isn't the author of this feed
          */
          userIsAuthor === true ? <WrappedAddPost /> : null
        }
        right={
          /*
            this toolbar is global, specific to the logged in user
          */
          <UserToolbar />
        }
        columns
      >
        <GlobalLoader>
          {
            /*
              we only show the slate for the logged in user
            */
            userIsAuthor === true ? <WrappedSlate /> : null
          }
          <Box margin={{ top: 'medium' }} css={
            css`background: none;`
          }>
            <PostListProvider
              postAuthor={author}
              userIsAuthor={userIsAuthor}
              username={username}
            >
              <PostList />
            </PostListProvider>
          </Box>
        </GlobalLoader>
      </Layout>
    )
  }
}

export default connect(mapStateToProps, () => new Object())(UserFeed)
