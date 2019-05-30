// IMPORTS
import React, { Component } from 'react';
import Moment from 'moment';

// STYLES
import styles from '../../../src/styles';
/** @jsx jsx */ import { jsx, Global } from '@emotion/core'
import css from '@emotion/css'
import styled from '@emotion/styled'

// COMPONENTS
import { Grommet, Box, Button, Grid } from 'grommet';
import PostAvatar from './PostAvatar.js';

export default (props) => {
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