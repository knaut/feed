import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { Grommet, Box, Button, Grid } from 'grommet';
import ProfileCard from '../../src/components/profile/Card';

import spoof from '../../.storybook/user.json';

// COMPONENTS
import Theme from '../../src/Theme'

storiesOf('Profile Card', module)
  .addDecorator(StoryRouter())
  .add('loading', () => (
    <Theme>
        <ProfileCard
          isLoading={true}
          isOnBlockstack={null}
          isMe={null}
          username={spoof.user.username}
          image={null}
        />
    </Theme>
  ))
  .add('id found, is on feed', () => (
    <Theme>
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
    </Theme>
  ))
  .add('id found, is on feed, is me', () => (
    <Theme>
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
    </Theme>
  ))
  .add('id found, is not on feed', () => (
    <Theme>
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
    </Theme>
  ))
  .add('id found, is not on feed, is me', () => (
    <Theme>
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
    </Theme>
  ))
  .add('id found, is not on feed, is me, no avatar', () => (
    <Theme>
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
    </Theme>
  ))
  .add('id found, is not on feed, is not me, no avatar', () => (
    <Theme>
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
    </Theme>
  ))
  .add('not found', () => (
    <Theme>
        <ProfileCard
          isLoading={false}
          isOnBlockstack={false}
          isMe={false}
          username={spoof.user.username}
          image={null}
        />
    </Theme>
  ))
  
;