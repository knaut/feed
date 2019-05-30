import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet, Box, Button, Grid } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import StoryRouter from 'storybook-react-router';
import FeedLink from '../../src/components/profile/FeedLink';

import spoof from '../../.storybook/user.json';

storiesOf('FeedLink', module)
  .addDecorator(StoryRouter())
  .add('no id', () => (
    <Grommet theme={grommet}>
      <FeedLink
        username={spoof.user.username}
        isOnBlockstack={false}
        isOnFeed={false}
        isMe={false}
        name={spoof.user.name}
      />
    </Grommet>
  ))
  .add('has id, no feed', () => (
    <Grommet theme={grommet}>
      <FeedLink
        username={spoof.user.username}
        isOnBlockstack={true}
        isOnFeed={false}
        isMe={false}
        name={spoof.user.name}
      />
    </Grommet>
  ))
  .add('has feed', () => (
    <Grommet theme={grommet}>
      <FeedLink
        username={spoof.user.username}
        isOnBlockstack={true}
        isOnFeed={true}
        isMe={false}
        name={spoof.user.name}
      />
    </Grommet>
  ))
  .add('is your feed', () => (
    <Grommet theme={grommet}>
      <FeedLink
        username={spoof.user.username}
        isOnBlockstack={true}
        isOnFeed={true}
        isMe={true}
        name={spoof.user.name}
      />
    </Grommet>
  ))
;