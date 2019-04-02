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

class Header extends Component {
  render() {
    const { 
      post 
    } = this.props;

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
            isLoading={false}
            isMe={false}
            username={post.Profile}
            name={this.props.name}
            image={this.props.image}
          />
        </Box>
        <Box gridArea='date' css={css`text-align:right;`}>
          <span style={{
            ...styles.typography.card_date,
            color: styles.colors.neutrals.gray2
          }}>{ Moment(post.timestamp).format('llll') }</span>
        </Box>
      </Grid>
    );

  }
}

class Card extends Component {
  render() {

    const {
      post
    } = this.props;

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
        <Header {...this.props}/>
        <div style={{
          whitespace: 'pre-wrap',
          overflowWrap: 'break-word'
        }}>{post.text}</div>
      </Box>
    );
  }
}

export default Card;