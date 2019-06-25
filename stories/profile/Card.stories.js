import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { Grommet, Box, Button, Grid } from 'grommet';
import ProfileCard from '../../src/components/profile/Card';

import spoof from '../../.storybook/user.json';

// COMPONENTS
import Layout from '../../src/Layout'
import Theme from '../../src/Theme'

storiesOf('Profile Card', module)
  .addDecorator(StoryRouter())
  .addDecorator(getStory => (
    <Theme>
      <Layout columns={false}>
        { getStory() }
      </Layout>
    </Theme>
  ))
  .add('loading', () => (
        <ProfileCard
          isLoading={true}
          isOnBlockstack={null}
          isMe={null}
          username={spoof.user.username}
          image={null}
        />
  ))
  .add('id found, is on feed', () => (
        <ProfileCard
          isLoading={false}
          isOnBlockstack={true}
          isMe={false}
          isOnFeed={true}
          username={spoof.user.username}
          image={spoof.user.image}
          name={spoof.user.name}
          description={spoof.user.description}
        />
  ))
  .add('id found, is on feed, is me', () => (
        <ProfileCard
          isLoading={false}
          isOnBlockstack={true}
          isMe={true}
          isOnFeed={true}
          username={spoof.user.username}
          image={spoof.user.image}
          name={spoof.user.name}
          description={spoof.user.description}
        />
  ))
  .add('id found, is not on feed', () => (
        <ProfileCard
          isLoading={false}
          isOnBlockstack={true}
          isMe={false}
          isOnFeed={false}
          username={spoof.user.username}
          image={spoof.user.image}
          name={spoof.user.name}
          description={spoof.user.description}
        />
  ))
  .add('id found, is not on feed, is me', () => (
        <ProfileCard
          isLoading={false}
          isOnBlockstack={true}
          isMe={true}
          isOnFeed={false}
          username={spoof.user.username}
          image={spoof.user.image}
          name={spoof.user.name}
          description={spoof.user.description}
        />
  ))
  .add('id found, is not on feed, is me, no avatar', () => (
        <ProfileCard
          isLoading={false}
          isOnBlockstack={true}
          isMe={true}
          isOnFeed={false}
          username={spoof.user.username}
          image={false}
          name={spoof.user.name}
          description={spoof.user.description}
        />
  ))
  .add('id found, is not on feed, is not me, no avatar', () => (
        <ProfileCard
          isLoading={false}
          isOnBlockstack={true}
          isMe={false}
          isOnFeed={false}
          username={spoof.user.username}
          image={false}
          name={spoof.user.name}
          description={spoof.user.description}
        />
  ))
  .add('not found', () => (
        <ProfileCard
          isLoading={false}
          isOnBlockstack={false}
          isMe={false}
          username={spoof.user.username}
          image={null}
        />
  ))
  
;