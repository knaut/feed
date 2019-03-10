import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet, Box, Button, Grid } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import Avatar from '../../../src/components/profile/Avatar.jsx';

import spoof from '../../user.json';

// STYLES
import styles from '../../../src/styles';

storiesOf('Avatar', module)
  .add('no id found', () => (
    <Grommet theme={grommet}>
      <div 
        style={{
          background: styles.colors.neutrals.dark,
          ...styles.app.container,
          justifyContent: 'start'
        }}
      >
        <Avatar
          isLoading={false}
          isOnBlockstack={false}
          isMe={false}
          username={spoof.user.username}
          image={null}
        />
      </div>
    </Grommet>
  ))
  .add('is loading', () => (
    <Grommet theme={grommet}>
      <div 
        style={{
          background: styles.colors.neutrals.dark,
          ...styles.app.container,
          justifyContent: 'start'
        }}
      >
        <Avatar
          isLoading={true}
          isOnBlockstack={null}
          isMe={null}
          username={spoof.user.username}
          image={null}
        />
      </div>
    </Grommet>
  ))
  .add('is loaded', () => (
    <Grommet theme={grommet}>
      <div 
        style={{
          background: styles.colors.neutrals.dark,
          ...styles.app.container,
          justifyContent: 'start'
        }}
      >
        <Avatar
          isLoading={false}
          isOnBlockstack={true}
          isMe={null}
          username={spoof.user.username}
          image={spoof.user.image}
        />
      </div>
    </Grommet>
  ))
  .add('is loaded & you', () => (
    <Grommet theme={grommet}>
      <div 
        style={{
          background: styles.colors.neutrals.dark,
          ...styles.app.container,
          justifyContent: 'start'
        }}
      >
        <Avatar
          isLoading={false}
          isOnBlockstack={true}
          isMe={true}
          username={spoof.user.username}
          image={spoof.user.image}
        />
      </div>
    </Grommet>
  ))
  .add('is loaded & no avatar', () => (
    <Grommet theme={grommet}>
      <div 
        style={{
          background: styles.colors.neutrals.dark,
          ...styles.app.container,
          justifyContent: 'start'
        }}
      >
        <Avatar
          isLoading={false}
          isOnBlockstack={true}
          isMe={false}
          username={spoof.user.username}
          image={null}
        />
      </div>
    </Grommet>
  ))
  .add('mini: is loaded', () => (
    <Grommet theme={grommet}>
      <div 
        style={{
          background: styles.colors.neutrals.dark,
          ...styles.app.container,
          justifyContent: 'start'
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
      </div>
    </Grommet>
  ))
;