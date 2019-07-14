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
import {
  UserNew,
  Info,
  Grow,
  Favorite,
  LinkNext
} from 'grommet-icons'

// UTILS
import css from '@emotion/css'

const GoToYourFeed = ({ username, feedPath }) => (
  <Box>
    <Box pad='small'>
      <Text color='cyanPastel'>
        Welcome back, <Anchor label={username} href="https://browser.blockstack.org/profiles" />.
      </Text>
    </Box>
    <Box pad='small'>
      <Link to={feedPath}>
        <Button icon={<LinkNext />} label="go to your feed" primary/>
      </Link>
    </Box>
  </Box>
)

export default GoToYourFeed