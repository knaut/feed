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

const InitialSignIn = ({ username, feedPath, initialSignIn }) => (
  <Box>
    <Box pad='small' align='center'>
      <Text color='cyanPastel' textAlign='center'>
        Welcome, <Anchor label={username} href="https://browser.blockstack.org/profiles" />. New to feed?
      </Text>
      <Text color='cyanPastel' textAlign='center'>
        Sign in to get started!
      </Text>
    </Box>
    <Box pad='small' align='center'>
      <Link to={feedPath} onClick={initialSignIn}>
        <Button icon={<LinkNext />} label="go to your feed" primary/>
      </Link>
    </Box>
  </Box>
)

export default InitialSignIn