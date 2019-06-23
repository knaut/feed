// IMPORTS
import React, { Component } from 'react';
import Moment from 'moment';
import { LoremIpsum } from 'lorem-ipsum';

// STYLES
import css from '@emotion/css'

// COMPONENTS
import { Grommet, Box } from 'grommet';
import Card from './Card'

class PostList extends Component {
  render() {
    const { posts, author, user } = this.props
    const cards = []

    if (posts) {

      for (let p = 0; posts.length > p; ++p) {
        const post = posts[p]
        console.log(post)
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
        { cards }
      </Box>
    );
  }
}

export default PostList;