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
          justifyContent: 'start',
          padding: '30px'
        }}
      >
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
      </div>
    </Grommet>
  ))
  .add('is loading', () => (
    <Grommet theme={grommet}>
      <div 
        style={{
          background: styles.colors.neutrals.dark,
          ...styles.app.container,
          justifyContent: 'start',
          padding: '30px'
        }}
      >
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
      </div>
    </Grommet>
  ))
  .add('is loaded', () => (
    <Grommet theme={grommet}>
      <div 
        style={{
          background: styles.colors.neutrals.dark,
          ...styles.app.container,
          justifyContent: 'start',
          padding: '30px'
        }}
      >
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
      </div>
    </Grommet>
  ))
  .add('is loaded & you', () => (
    <Grommet theme={grommet}>
      <div 
        style={{
          background: styles.colors.neutrals.dark,
          ...styles.app.container,
          justifyContent: 'start',
          padding: '30px'
        }}
      >
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
      </div>
    </Grommet>
  ))
  .add('is loaded & no avatar', () => (
    <Grommet theme={grommet}>
      <div 
        style={{
          background: styles.colors.neutrals.dark,
          ...styles.app.container,
          justifyContent: 'start',
          padding: '30px'
        }}
      >
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
      </div>
    </Grommet>
  ))
  .add('mini: is loaded', () => (
    <Grommet theme={grommet}>
      <div 
        style={{
          background: styles.colors.neutrals.dark,
          ...styles.app.container,
          justifyContent: 'start',
          padding: '30px'
        }}
      >
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
      </div>
    </Grommet>
  ))
;