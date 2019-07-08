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
import Card from '../Card'

// ACTIONS
import { activateEditor } from '../../../actions/editor'

const mapStateToProps = (state, ownProps) => {
  console.log(state, ownProps)

  const {
    cache,
    fromUser
  } = ownProps


  const blockstackId = state.blockstack.id
  return {
    blockstackId,

    posts: cache.Status,
    fromUser
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      activateEditor
    }, dispatch)
  }
}

const NoPosts = () => (
  <Box
    align='center'
    justify='center'
  >
    <Heading level={4} color='purplePastel'>…no posts to show yet…</Heading>
  </Box>
)

class PostList extends Component {
  // componentDidMount () {
  //   const { posts } = this.props
  //   if (!posts.length) {
  //     this.props.actions.activateEditor(null)
  //   }
  // }

  render () {
    console.log(this)
    const { posts, author, blockstackId } = this.props
    const cards = []

    if (posts) {
      for (let p = 0; posts.ids.length > p; ++p) {
        const postId = posts.ids[p]
        const post = posts.entities[ postId ]

        cards.push(
          <Card
            key={p}
            post={post}
            author={author}
            username={blockstackId}
          />
        )
      }
    }

    return (
      <Box>
        { cards.length ? cards : <NoPosts /> }
      </Box>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
