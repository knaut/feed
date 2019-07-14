// IMPORTS
import React, { Component } from 'react'
import {
  Box,
  Button,
  Image,
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

// ASSETS
import fleafImage from '../../../assets/Feed_Fleaf_100h.png'

const Welcome = () => (
  <Box align='center'>
    <Image src={fleafImage}/>
    <Heading level={1}>
      <span css={css`color: var(--purplePastel);`}>welcome to</span> <strong css={css`color: var(--purple);`}>feed</strong>
    </Heading>
    <Text color='light' textAlign='center' size='medium'>
      <span css={css`font-weight: bold;`}>feed</span>
      {` is a social networking utility powered by blockchain.`}
    </Text>
  </Box>
)

export default Welcome