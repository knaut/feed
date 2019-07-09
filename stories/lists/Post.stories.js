import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grommet, Box, Button, Grid } from 'grommet'
import { grommet, dark } from 'grommet/themes'
import StoryRouter from 'storybook-react-router'

// COMPONENTS
import Theme from '../../src/Theme'
import Layout from '../../src/screens/Layout'
import PostList from '../../src/components/Post/List'
import PostListProvider from './providers/PostListProvider'

storiesOf('Post List', module)
  .addDecorator(StoryRouter())
  .addDecorator(getStory => (
    <Theme>
      <Layout columns={false}>
        { getStory() }
      </Layout>
    </Theme>
  ))
  .add('default', () => (
    <PostListProvider>
      <PostList />
    </PostListProvider>
  ))
