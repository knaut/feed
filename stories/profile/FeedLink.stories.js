import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet, Box, Button, Grid } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import StoryRouter from 'storybook-react-router';
import FeedLink from '../../src/components/profile/FeedLink';

import spoof from '../../.storybook/user.json';

// COMPONENTS
import Theme from '../../src/Theme'

storiesOf('FeedLink', module)
  .addDecorator(StoryRouter())
  .add('no id', () => (
    <Theme>
      <FeedLink
        username={spoof.user.username}
        isOnBlockstack={false}
        isOnFeed={false}
        isMe={false}
        name={spoof.user.name}
      />
    </Theme>
  ))
  .add('has id, no feed', () => (
    <Theme>
      <FeedLink
        username={spoof.user.username}
        isOnBlockstack={true}
        isOnFeed={false}
        isMe={false}
        name={spoof.user.name}
      />
    </Theme>
  ))
  .add('has feed', () => (
    <Theme>
      <FeedLink
        username={spoof.user.username}
        isOnBlockstack={true}
        isOnFeed={true}
        isMe={false}
        name={spoof.user.name}
      />
    </Theme>
  ))
  .add('is your feed', () => (
    <Theme>
      <FeedLink
        username={spoof.user.username}
        isOnBlockstack={true}
        isOnFeed={true}
        isMe={true}
        name={spoof.user.name}
      />
    </Theme>
  ))
;