// IMPORTS
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// COMPONENTS
import {
  Box,
  Button,
  Grid,
  TextArea,
  Heading,
  Text,
  Image
} from 'grommet'

import {
  LinkNext,
  Grow,
  Alert
} from 'grommet-icons'

import PostAvatar from '../post/PostAvatar'
import FeedLink from './FeedLink'

const FeedButton = (props) => {
  const {
    username,
    name,
    isOnFeed
  } = props

  return isOnFeed ? (
    <Box justify='center'>
      <Link to={`/${username}/feed`}>
        <Button
          icon={<LinkNext />}
          label={`visit ${name}'s feed`}
        />
      </Link>
    </Box>
  ) : (
    <Box round pad='small' justify='center' direction='row' align='center' border={{ color: 'light-6', size: 'small', style: 'solid', side: 'all' }}>
      <Box margin='small'>
        <Alert color='dark-3' size='medium' />
      </Box>
      <Text color='dark-3'>{`${name} is on Blockstack, but has not signed into Feed.`}</Text>
    </Box>
  )
}

const Row = (props) => {
  const {
    isLoading,
    isOnFeed,
    isOnBlockstack,
    isMe,
    username,
    image,
    description,
    name
  } = props

  return (
    <Box align='center'>
      <Box
        round
        pad='medium'
        width='large'
        background='white'
      >
        <Box direction='row'>
          <Box margin={{ right: 'small' }}>
            <PostAvatar
              showUsername
              isLoading={isLoading}
              isOnBlockstack={isOnBlockstack}
              isMe={isMe}
              username={username}
              image={image}
              name={name}
            />
          </Box>
          <Box flex={'shrink'} align='start' justify='center'>
            <Box margin={{ left: 'small' }}>
              <Text color='dark-3'>
                { description }
              </Text>
            </Box>
          </Box>
        </Box>
        <Box align='center' pad={{ top: 'small' }}>
          <FeedButton {...props} />
        </Box>
      </Box>
    </Box>
  )
}

export default Row
