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

class ProfileRow extends Component {
  render() {
    return (
      <Box align="center" pad="medium">
        <Box
          pad='medium'
          gap='small'
          round
          style={{
            background: 'white',
            width: '100%',
            maxWidth: '800px'
          }}
        >
          <PostAvatar
            isLoading={true}
            isOnBlockstack={null}
            isMe={null}
            username={'daanderson'}
            image={null}
          />
        </Box>
      </Box>
    )
  }
}

export default ProfileRow