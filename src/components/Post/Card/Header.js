// IMPORTS
import React, { Component } from 'react'
import Moment from 'moment'

// STYLES
import css from '@emotion/css'

// COMPONENTS
import {
  Grommet,
  Box,
  Button,
  Grid,
  Text
} from 'grommet'

import Avatar from '../../Avatar'

export default class CardHeader extends Component {
  render () {
    const {
      username,
      name,
      image,
      timestamp,
      size
    } = this.props

    return (
      <Grid
        fill
        areas={[
          { name: 'user', start: [0, 0], end: [0, 0] },
          { name: 'date', start: [1, 0], end: [1, 0] }
        ]}
        columns={['auto', 'flex']}
        rows={['flex']}
        gap='small'
      >
        <Box gridArea='user'>
          <Avatar
            isLoading={image}
            isOnBlockstack
            isMe={false}
            username={username}
            name={name}
            image={image}
            size={size}
          />
        </Box>
        <Box gridArea='date' css={css`text-align:right;`}>
          <Text
            color='gray2'
            css={css`
              font-family: Andale Mono, Monaco, Courier New;
              font-size: .8em;
            `}
          >{ Moment(timestamp).format('llll') }</Text>
        </Box>
      </Grid>
    )
  }
}
