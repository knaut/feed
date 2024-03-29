// IMPORTS
import React, { Component } from 'react'

// STYLES
import css from '@emotion/css'

// COMPONENTS
import {
  Grommet,
  Box,
  Button,
  Grid,
  TextArea,
  Heading,
  Text,
  Image
} from 'grommet'
import { grommet, dark } from 'grommet/themes'
import { Add, Star, Note, SubtractCircle, Gremlin, Help, User } from 'grommet-icons'
import { FadeLoader, BarLoader, HashLoader } from 'react-spinners'

import Avatar from '../Avatar'
import FeedLink from './FeedLink'

class ProfileCard extends Component {
  render () {
    const {
      isLoading,
      isOnBlockstack,
      isMe,
      isOnFeed,
      image,
      name,
      username,
      description,
      size
    } = this.props

    return (
      <Box align='center'>
        <Box
          width='large'
          background='white'
          pad='medium'
          round
        >
          <header>
            <Avatar {...this.props} size={size} />
            <Heading level={1} size={'small'} css={css`text-align: center;`}>
              {this.props.name}
            </Heading>
            <Text level={1} size={'medium'} margin={{ bottom: 'small' }} css={css`
              display: block;
              text-align: center;
            `}>
              {this.props.description}
            </Text>
          </header>
          <FeedLink {...this.props} />
        </Box>
      </Box>
    )
  }
}

export default ProfileCard
