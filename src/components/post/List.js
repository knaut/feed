// IMPORTS
import React, { Component } from 'react';
import Moment from 'moment';
import { LoremIpsum } from 'lorem-ipsum';

// STYLES
import styles from '../../styles';
import css from '@emotion/css'

// COMPONENTS
import { Grommet, Box } from 'grommet';
import Card from './Card'

class PostList extends Component {

  render() {
    console.log(this)
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
      <Box align="center" style={{ width: '100%' }} pad='medium'>
        { cards }
      </Box>
    );
  }
}

export default PostList;