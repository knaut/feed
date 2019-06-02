// IMPORTS
import React, { Component } from 'react';
import Moment from 'moment';
import { LoremIpsum } from 'lorem-ipsum';

// STYLES
import styles from '../../styles';
/** @jsx jsx */ import { jsx, Global } from '@emotion/core'
import css from '@emotion/css'
import styled from '@emotion/styled'

// COMPONENTS
import { Grommet, Box } from 'grommet';
import Card from '../post/Card'

class PostList extends Component {

  render() {
    console.log(this)
    const { posts, author } = this.props
    const cards = []

    for (let p = 0; posts.length > p; ++p) {
      const post = posts[p]

      cards.push(
        <Card
          key={p}
          post={post}
          author={author}
        />
      )
    }

    return (
      <Box align="center" style={{ width: '100%' }} pad='medium'>
        { cards }
      </Box>
    );
  }
}

export default PostList;