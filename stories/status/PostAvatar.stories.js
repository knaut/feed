import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet, Box, Button, Grid } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import StoryRouter from 'storybook-react-router';

// STYLES
import styles from '../../src/styles';

// UTILS
import generateStore from '../../src/utils/generateStore.js';

// COMPONENTS
import PostAvatar from '../../src/components/post/PostAvatar';

// MODELS
import Status from '../../src/models/Status';

// SPOOF USER
import spoof from '../../.storybook/user.json';

const store = generateStore();

storiesOf('Post Avatar', module)
  .add('is loaded, has image', () => (
    <Grommet theme={grommet}>
      <div 
        style={{
          background: styles.colors.darks.purple,
          ...styles.app.container,
          justifyContent: 'start'
        }}
      >
        <Box align="center" style={{ width: '100%' }} pad='medium'>
          <PostAvatar
            isLoading={false}
            isMe={false}
            name={spoof.user.name}
            image={spoof.user.image}
          />
        </Box>
      </div>
    </Grommet>
  ))
  .add('is loaded, no image', () => (
    <Grommet theme={grommet}>
      <div 
        style={{
          background: styles.colors.darks.purple,
          ...styles.app.container,
          justifyContent: 'start'
        }}
      >
        <Box align="center" style={{ width: '100%' }} pad='medium'>
          <PostAvatar
            isLoading={false}
            isMe={false}
            name={spoof.user.name}
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
          background: styles.colors.darks.purple,
          ...styles.app.container,
          justifyContent: 'start'
        }}
      >
        <Box align="center" style={{ width: '100%' }} pad='medium'>
          <PostAvatar
            isLoading={true}
            isMe={false}
            username={spoof.user.username}
            image={null}
          />
        </Box>
      </div>
    </Grommet>
  ))
;