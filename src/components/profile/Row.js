// IMPORTS
import React, { Component } from 'react';

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

import PostAvatar from '../post/PostAvatar'

export default ({
  isLoading,
  isOnBlockstack,
  isMe,
  username,
  image,
  description,
  name
}) => {

  return (
    <Box align="center" pad="medium">
      <Box
        pad='medium'
        
        round
        style={{
          background: 'white',
          width: '100%',
          maxWidth: '800px'
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
      </Box>
    </Box>
  )
}