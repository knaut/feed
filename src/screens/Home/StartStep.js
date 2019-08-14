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

const StartStep = ({ color, number, children, icon }) => (
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
      css={css`
        position: relative;
      `}
    >
      <Heading color={color} level={1} size='large' css={css`
        position: relative;
        z-index: 2;
      `}>{ number }</Heading>
      <Box css={css`
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -48px;
        margin-top: -48px;
        z-index: 1;
      `}>
        { icon }
      </Box>
    </Box>
    <Box width='large' justify='center' pad='medium'>
      { children }
    </Box>
  </Box>
)

export default StartStep