import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet, Box, Button, Grid } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import Avatar from '../../../src/components/profile/Avatar.jsx';

import spoof from '../../user.json';

storiesOf('Avatar', module)
  .add('no id found', () => (
    <Grommet theme={grommet}>
      <Avatar
        isLoading={false}
        isOnBlockstack={false}
        isMe={false}
        username={spoof.user.username}
        image={null}
      />
    </Grommet>
  ))
  .add('is loading', () => (
    <Grommet theme={grommet}>
      <Avatar
        isLoading={true}
        isOnBlockstack={null}
        isMe={null}
        username={spoof.user.username}
        image={null}
      />
    </Grommet>
  ))
  .add('is loaded', () => (
    <Grommet theme={grommet}>
      <Avatar
        isLoading={false}
        isOnBlockstack={true}
        isMe={null}
        username={spoof.user.username}
        image={spoof.user.image}
      />
    </Grommet>
  ))
  .add('is loaded & you', () => (
    <Grommet theme={grommet}>
      <Avatar
        isLoading={false}
        isOnBlockstack={true}
        isMe={true}
        username={spoof.user.username}
        image={spoof.user.image}
      />
    </Grommet>
  ))
  .add('is loaded & no avatar', () => (
    <Grommet theme={grommet}>
      <Avatar
        isLoading={false}
        isOnBlockstack={true}
        isMe={false}
        username={spoof.user.username}
        image={null}
      />
    </Grommet>
  ))
;