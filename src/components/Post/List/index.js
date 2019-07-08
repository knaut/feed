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
  console.log({state, ownProps})

  const {
    author
  } = ownProps

  const posts = state.feed

  return {
    author,
    posts,
    username: state.blockstack.id
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
  }

  formatPosts = (ids, entities, author) => {
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

  render () {
    console.log(this)

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

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
