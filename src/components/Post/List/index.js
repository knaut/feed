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
  
  const author = {}

  if (isMe) {
    author.username = state.blockstack.id // "username" is legacy pattern
    author.name = state.blockstack.name
    author.description = state.blockstack.description
    author.image = state.blockstack.image
  } else {
    author.username = cacheUserId
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
  componentDidMount () {
  // replace this in a different component
  //   const { posts } = this.props
  //   if (!posts.length) {
  //     this.props.actions.activateEditor(null)
  //   }
    const {
      author
    } = this.props

    if (Object.keys(author).length === 0 && !isMe) {
      // we need to lookup this author's blockstack information
    }
  }

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
