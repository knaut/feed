import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet, Box, Button, Grid } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import Avatar from '../src/components/profile/Avatar';

import spoof from '../.storybook/user.json';

// COMPONENTS
import Theme from '../src/Theme'
import Layout from '../src/Layout'

storiesOf('Avatar', module)
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
      isLoading={true}
      isOnBlockstack={null}
      isMe={null}
      username={spoof.user.username}
      image={null}
    />
  ))
  .add('is loaded', () => (
    <Avatar
      isLoading={false}
      isOnBlockstack={true}
      isMe={null}
      username={spoof.user.username}
      image={spoof.user.image}
    />
  ))
  .add('is loaded & you', () => (
    <Avatar
      isLoading={false}
      isOnBlockstack={true}
      isMe={true}
      username={spoof.user.username}
      image={spoof.user.image}
    />
  ))
  .add('is loaded & no avatar', () => (
    <Avatar
      isLoading={false}
      isOnBlockstack={true}
      isMe={false}
      username={spoof.user.username}
      image={null}
    />
  ))
