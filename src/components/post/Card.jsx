// IMPORTS
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

// STYLES
import styles from '../../../src/styles';
/** @jsx jsx */ import { jsx, Global } from '@emotion/core'
import css from '@emotion/css'
import styled from '@emotion/styled'

// COMPONENTS
import { Grommet, Box, Button, Grid } from 'grommet';
import PostAvatar from './PostAvatar.jsx';

const Header = (props) => {
  const { 
    username,
    name,
    image,
    timestamp
  } = props;

  return (
    <Grid
      areas={[
        { name: 'user', start: [0, 0], end: [0, 0] },
        { name: 'date', start: [1, 0], end: [1, 0] }
      ]}
      columns={['flex', 'flex']}
      rows={['flex']}
      gap='small'
    >
      <Box gridArea='user'>
        <PostAvatar
          isLoading={image ? false : true}
          isMe={false}
          username={username}
          name={name}
          image={image}
        />
      </Box>
      <Box gridArea='date' css={css`text-align:right;`}>
        <span style={{
          ...styles.typography.card_date,
          color: styles.colors.neutrals.gray2
        }}>{ Moment(timestamp).format('llll') }</span>
      </Box>
    </Grid>
  );
}

const Post = (post) => {
  const {
    text
  } = post;

  return (
    <div css={css`
      whitespace: pre-wrap;
      overflow-wrap: break-word;
    `}>
      {text}
    </div>
  );
}

class Card extends Component {
  render() {
    const {
      post,
      author
    } = this.props;

    console.log(post, author);

    const {
      username,
      name,
      image
    } = author;

    const {
      timestamp,
      text
    } = post;

    return (
      <Box
        pad='medium'
        gap='small'
        round
        style={{
          background: 'white',
          width: '100%',
          cursor: 'pointer',
          zIndex: 1
        }}
      >
        <Header 
          username={username}
          image={image}
          name={name}
          timestamp={timestamp}
        />
        <Post
          text={text}
        />
      </Box>
    );
  }
}

export default Card;