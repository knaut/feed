// IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// STYLES
import css from '@emotion/css'

// COMPONENTS
import { 
  Box,
  Heading
} from 'grommet';
import Card from './Card'

// ACTIONS
import { activateEditor } from '../../actions/editor';

function mapDispatchToProps(dispatch) {
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
  componentDidMount() {
    const { posts } = this.props
    if (!posts.length) {
      this.props.actions.activateEditor(null)
    }
  }

  render() {
    const { posts, author, user } = this.props
    const cards = []

    if (posts) {

      for (let p = 0; posts.length > p; ++p) {
        const post = posts[p]
        cards.push(
          <Card
            key={p}
            post={post}
            author={author}
            user={user}
          />
        )
      }
    }

    return (
      <Box>
        { cards.length ? cards : <NoPosts/> }
      </Box>
    );
  }
}

export default connect( () => new Object(), mapDispatchToProps )(PostList)

