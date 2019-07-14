// IMPORTS
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// COMPONENTS
import {
  Box,
  Button,
  Image,
  Heading,
  Text,
  Anchor
} from 'grommet'
import { HashLoader } from 'react-spinners'
import {
  UserNew,
  Info,
  Grow,
  Favorite
} from 'grommet-icons'

// UTILS
import css from '@emotion/css'

// THEME
import { feed } from '../../Theme'

const LoadingAuth = () => (
  <Box margin='medium'>
    <HashLoader
      color={feed.global.colors.purple}
      loading
      size={35}
    />
  </Box>
)

export default LoadingAuth