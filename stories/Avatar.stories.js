import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grommet, Box, Button, Grid } from 'grommet'
import { grommet, dark } from 'grommet/themes'
import StoryRouter from 'storybook-react-router'

import spoof from '../.storybook/user.json'

// COMPONENTS
import Avatar from '../src/components/Avatar'
import Theme from '../src/Theme'
import Layout from '../src/screens/Layout'

storiesOf('Avatar - Large', module)
  .addDecorator(getStory => (
    <Theme>
      <Layout columns={false}>
        { getStory() }
      </Layout>
    </Theme>
  ))
  .add('no id found', () => (
    <Avatar
      isLoading={false}
      isOnBlockstack={false}
      isMe={false}
      username={spoof.user.username}
      image={null}
    />
  ))
  .add('is loading', () => (
    <Avatar
      isLoading
      isOnBlockstack={null}
      isMe={null}
      username={spoof.user.username}
      image={null}
    />
  ))
  .add('is loaded', () => (
    <Avatar
      isLoading={false}
      isOnBlockstack
      isMe={null}
      username={spoof.user.username}
      image={spoof.user.image}
    />
  ))
  .add('is loaded & you', () => (
    <Avatar
      isLoading={false}
      isOnBlockstack
      isMe
      username={spoof.user.username}
      image={spoof.user.image}
    />
  ))
  .add('is loaded & no avatar', () => (
    <Avatar
      isLoading={false}
      isOnBlockstack
      isMe={false}
      username={spoof.user.username}
      image={null}
    />
  ))

storiesOf('Avatar - Small', module)
  .addDecorator(StoryRouter())
  .addDecorator(getStory => (
    <Theme>
      <Layout columns={false}>
        <Box align='center' justify='center'>
          { getStory() }
        </Box>
      </Layout>
    </Theme>
  ))
  .add('is loaded', () => (
    <Avatar
      size={'small'}
      isLoading={false}
      isOnBlockstack
      isMe={false}
      username={spoof.user.username}
      name={spoof.user.name}
      image={spoof.user.image}
    />
  ))
  .add('is loading', () => (
    <Avatar
      size={'small'}
      isLoading
      isOnBlockstack
      isMe={false}
      username={spoof.user.username}
      name={spoof.user.name}
      image={spoof.user.image}
    />
  ))
  .add('is loaded & no avatar', () => (
    <Avatar
      size={'small'}
      isLoading={false}
      isOnBlockstack
      isMe={false}
      username={spoof.user.username}
      image={null}
      name={spoof.user.name}
    />
  ))
