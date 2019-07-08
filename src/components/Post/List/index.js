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

// ACTIONS
import { activateEditor } from '../../../actions/editor'

const mapStateToProps = (state, ownProps) => {
  console.log(state, ownProps)

  const {
    // passed in from CacheProvider
    cache,
    cacheUserId
  } = ownProps

  const isMe = state.blockstack.id === cacheUserId ? true : false
  
  let author = {}

  if (isMe) {
    author.username = state.blockstack.username // legacy pattern
    author.name = state.blockstack.name
    author.description = state.blockstack.description
    author.image = state.blockstack.image
  }

  return {
    isMe,
    author,
    posts: cache.Status
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      activateEditor
    }, dispatch)
  }
}

class PostList extends Component {
  // componentDidMount () {
  //   const { posts } = this.props
  //   if (!posts.length) {
  //     this.props.actions.activateEditor(null)
  //   }
  // }

  render () {
    console.log(this)
    const {
      posts,
      author,
      username
    } = this.props



    return <List
      posts={posts}
      author={author}
      username={username}
    />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
