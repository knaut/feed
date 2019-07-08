// IMPORTS
import React, { Component } from 'react'
import {
  Grommet,
  Box,
  Button,
  Heading,
  Text,
  Anchor
} from 'grommet'
import {
  UserNew,
  Info,
  Grow,
  Favorite
} from 'grommet-icons'

// UTILS
import css from '@emotion/css'

const StartStep = ({ color, number, children }) => (
  <Box
    css={css`align-items: center;`}
    pad={{ left: 'large', right: 'large', bottom: 'medium' }}
    direction='row-responsive'
    justify='center'
  >
    <Box
      round='full'
      width='small'
      height='small'
      border={{
        size: 'large',
        color: 'light-6'
      }}
      justify='center'
      align='center'
    >
      <Heading color={color} level={1} size='large'>{ number }</Heading>
    </Box>
    <Box width='large' justify='center' pad='medium'>
      { children }
    </Box>
  </Box>
)

export default StartStep