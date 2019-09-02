// IMPORTS
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Moment from 'moment'

// STYLES
import css from '@emotion/css'

// COMPONENTS
import {
  Box,
  Heading,
  Text
} from 'grommet'

import Avatar from '../Avatar'
import { CirclesButton } from '../GlobalToolbar/Circles'

const ListItem = ({
  username,
  image,
  name,
  timestamp
}) => (
  <Box
    background='white'
    pad='small'
    direction='row'
  >
    <Box justify='evenly'>
      <Avatar
        size='small'
        isLoading={false}
        isOnBlockstack
        isMe={null}
        username={username}
        image={image}
        name={name}
      />
    </Box>
    <Box justify='evenly' flex='grow' align='end'>
      <CirclesButton />
    </Box>
  </Box>
)

export default ListItem