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

const CreateID = () => (
  <Box pad={'medium'}>
    <a href='https://browser.blockstack.org/sign-up'>
      <Button
        primary
        reverse
        css={css`border-radius: 35px;`}
        icon={<UserNew size='large' css={css`width: 40px;`} />}
        label={<Heading level={3} css={css`margin: 10px;`}>Create your ID to get started</Heading>}
      />
    </a>
  </Box>
)

export default CreateID