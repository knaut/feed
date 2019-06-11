import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { Grommet, Box, Button, Grid } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import ProfileCard from '../../src/components/profile/Card';

import spoof from '../../.storybook/user.json';

// STYLES
import styles from '../../src/styles';

// COMPONENTS
import Layout from '../../src/Layout'
import Theme from '../../src/Theme'
import ProfileRow from '../../src/components/profile/Row'

storiesOf('Profile Row', module)
  .addDecorator(StoryRouter())
  .addDecorator(getStory => (
    <Theme>
      <Layout>
        { getStory() }
      </Layout>
    </Theme>
  ))
  .add('loading', () => (
    <ProfileRow
      isLoading={true}
      isOnBlockstack={null}
      isMe={false}
      name={spoof.user.name}
      username={spoof.user.username}
      image={spoof.user.image}
    />
  ))
  .add('no image available', () => (
    <ProfileRow
      isLoading={false}
      isOnBlockstack={true}
      isMe={false}
      name={spoof.user.name}
      username={spoof.user.username}
      image={false}
      description={spoof.user.description}
    />
  ))
  .add('loaded, is on Blockstack', () => (
    <ProfileRow
      isLoading={false}
      isOnBlockstack={true}
      isMe={false}
      name={spoof.user.name}
      username={spoof.user.username}
      image={spoof.user.image}
      description={spoof.user.description}
    />
  ))