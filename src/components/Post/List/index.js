// IMPORTS
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// STYLES
import css from '@emotion/css'

// COMPONENTS
import {
  Box,
  Heading
} from 'grommet'
import List from './List'

const mapStateToProps = (state, ownProps) => {
  const {
    author,
    blockstackUserIsAuthor
  } = ownProps

  const posts = state.feed

  return {
    author,
    posts,
    username: state.blockstack.id
  }
}

class PostList extends Component {
  render () {
    const {
      posts,
      author,
      username
    } = this.props

    const authorObject = {
      username: author
    }

    return posts ? <List
      posts={posts}
      author={posts.author}
      username={username}
    /> : null
  }
}

export default connect(mapStateToProps, {})(PostList)
