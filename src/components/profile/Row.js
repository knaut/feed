// IMPORTS
import React, { Component } from 'react';
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
} from 'grommet';
import { Add, Star, Note, SubtractCircle, Gremlin, Help, User, Login, LinkNext, Home } from 'grommet-icons';
import PostAvatar from '../post/PostAvatar'

import FeedLink from './FeedLink';

const Feed = (props) => (
  <Box justify='center' pad={{left: 'medium'}}>
    <Link to={ `/${props.username}/feed` }>
      <Button icon={<Home />} label={'visit feed'} primary/>
    </Link>
  </Box>
);

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
    <Box align="center">
      <Box
        pad='medium'
        round
        style={{
          background: 'white',
        }}
        direction='row'
      >
        <Box margin={{right: 'small'}}>
        <PostAvatar
          isLoading={isLoading}
          isOnBlockstack={isOnBlockstack}
          isMe={isMe}
          username={username}
          image={image}
          name={name}
        />
        </Box>
        <Box flex={'shrink'} align='start' justify='center'>
          <Text color='dark-3' margin={{left: 'small'}}>
            { description }
          </Text>
        </Box>
        { isOnFeed === true ? <Feed { ...props }/> : null }
      </Box>
    </Box>
  )
}

export default Row