import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet, Box, Button, Grid } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import Avatar from '../../src/components/profile/Avatar';

import spoof from '../../.storybook/user.json';

// COMPONENTS
import Theme from '../../src/Theme'

storiesOf('Avatar', module)
  .add('no id found', () => (
    <Theme>
      <Box
        pad='xlarge'
        gap='small'
        round
        style={{
          background: 'white',
          width: '100%',
          cursor: 'pointer',
          zIndex: 1
        }}
      >
        <Avatar
          isLoading={false}
          isOnBlockstack={false}
          isMe={false}
          username={spoof.user.username}
          image={null}
        />
      </Box>
    </Theme>
  ))
  .add('is loading', () => (
    <Theme>
      <Box
        pad='xlarge'
        gap='small'
        round
        style={{
          background: 'white',
          width: '100%',
          cursor: 'pointer',
          zIndex: 1
        }}
      >
        <Avatar
          isLoading={true}
          isOnBlockstack={null}
          isMe={null}
          username={spoof.user.username}
          image={null}
        />
      </Box>
    </Theme>
  ))
  .add('is loaded', () => (
    <Theme>
      <Box
        pad='xlarge'
        gap='small'
        round
        style={{
          background: 'white',
          width: '100%',
          cursor: 'pointer',
          zIndex: 1
        }}
      >
        <Avatar
          isLoading={false}
          isOnBlockstack={true}
          isMe={null}
          username={spoof.user.username}
          image={spoof.user.image}
        />
      </Box>
    </Theme>
  ))
  .add('is loaded & you', () => (
    <Theme>
      <Box
        pad='xlarge'
        gap='small'
        round
        style={{
          background: 'white',
          width: '100%',
          cursor: 'pointer',
          zIndex: 1
        }}
      >
        <Avatar
          isLoading={false}
          isOnBlockstack={true}
          isMe={true}
          username={spoof.user.username}
          image={spoof.user.image}
        />
      </Box>
    </Theme>
  ))
  .add('is loaded & no avatar', () => (
    <Theme>
      <Box
        pad='xlarge'
        gap='small'
        round
        style={{
          background: 'white',
          width: '100%',
          cursor: 'pointer',
          zIndex: 1
        }}
      >
        <Avatar
          isLoading={false}
          isOnBlockstack={true}
          isMe={false}
          username={spoof.user.username}
          image={null}
        />
      </Box>
    </Theme>
  ))
  .add('mini: is loaded', () => (
    <Theme>
      <Box
        pad='xlarge'
        gap='small'
        round
        style={{
          background: 'white',
          width: '100%',
          cursor: 'pointer',
          zIndex: 1
        }}
      >
        <Avatar
          isLoading={false}
          isOnBlockstack={true}
          isMe={null}
          username={spoof.user.username}
          image={spoof.user.image}
          mini={true}
        />
        </Box>
    </Theme>
  ))
