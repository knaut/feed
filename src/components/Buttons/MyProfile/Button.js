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
  Favorite
} from 'grommet-icons'

// UTILS
import css from '@emotion/css'

const MyProfileButton = ({ active, id }) => (
  <Box align='center' pad={{ top: 'medium', left: 'medium', right: 'medium', bottom: 'none' }}>
    <Link to={`/${id}`}>
      <Button
        icon={
          <User color={active ? `purpleDark` : `light`} />
        }
        primary
        css={css`
          background: ${active ? 'var(--light)' : 'var(--purpleDark)'};
          border: ${active ? '5px solid var(--dark)' : '5px solid var(--purple)'};
          border-radius: 24px;
          display: flex;
          transition: 0.2s all ease-in-out;
        `}
      />
    </Link>
  </Box>
)


export default MyProfileButton