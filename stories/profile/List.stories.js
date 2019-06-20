import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet, Box, Button, Grid } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import StoryRouter from 'storybook-react-router';

// COMPONENTS
import Theme from '../../src/Theme'
import Layout from '../../src/Layout'
import ProfileList from '../../src/components/profile/List'

// SPOOF
import spoof from '../../.storybook/user.json';

storiesOf('ProfileList', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <Theme>
      <Layout>
        <ProfileList list={10}/>
      </Layout>
    </Theme>
  ))