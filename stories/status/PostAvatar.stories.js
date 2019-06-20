import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet, Box, Button, Grid } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import StoryRouter from 'storybook-react-router';

// UTILS
import generateStore from '../../src/utils/generateStore.js';

// COMPONENTS
import Theme from '../../src/Theme'
import PostAvatar from '../../src/components/post/PostAvatar';

// MODELS
import Status from '../../src/models/Status';

// SPOOF USER
import spoof from '../../.storybook/user.json';

const store = generateStore();

storiesOf('Post Avatar', module)
  .add('is loaded, has image', () => (
    <Theme>
      <Box align="center" style={{ width: '100%' }} pad='medium'>
        <PostAvatar
          isLoading={false}
          isMe={false}
          name={spoof.user.name}
          image={spoof.user.image}
        />
      </Box>
    </Theme>
  ))
  .add('is loaded, no image', () => (
    <Theme>
      <Box align="center" style={{ width: '100%' }} pad='medium'>
        <PostAvatar
          isLoading={false}
          isMe={false}
          name={spoof.user.name}
          image={null}
        />
      </Box>
    </Theme>
  ))
  .add('is loading', () => (
    <Theme>
      <Box align="center" style={{ width: '100%' }} pad='medium'>
        <PostAvatar
          isLoading={true}
          isMe={false}
          username={spoof.user.username}
          image={null}
        />
      </Box>
    </Theme>
  ))
;