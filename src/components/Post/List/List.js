// IMPORTS
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// STYLES
import css from '@emotion/css'

// COMPONENTS
import {
  Box,
  Heading
} from 'grommet'
import Card from '../Card'

const NoPosts = () => (
  <Box
    align='center'
    justify='center'
  >
    <Heading level={4} color='purplePastel'>…no posts to show yet…</Heading>
  </Box>
)

const List = ({ posts, author, username }) => {
  const cards = []

  if (posts) {
    for (let p = 0; posts.ids.length > p; ++p) {
      const postId = posts.ids[p]
      const post = posts.entities[ postId ]
      cards.push(
        <Card
          key={p}
          post={post}
          author={author}
          username={username}
        />
      )
    }
  }

  return (
    <Box>
      { cards.length ? cards : <NoPosts /> }
    </Box>
  )
}

export default List