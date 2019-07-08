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

const LearnMore = ({ large }) => (
  <a href='https://blockstack.org/try-blockstack/'>
    <Button
      reverse
      css={large ? css`border-radius: 35px; border-width: 5px;` : null}
      icon={<Info color='status-warning' size={large ? 'large' : null} css={large ? css`width: 40px;` : null} />}
      label={large ? <Heading level={3} css={css`margin: 5px;`}>Learn more</Heading> : 'Learn more'}
    />
  </a>
)

export default LearnMore