import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet, Box, Button, Grid } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import StoryRouter from 'storybook-react-router';

// COMPONENTS
import Theme from '../../src/Theme'
import PostList from '../../src/components/post/List';
import PostListProvider from './providers/PostListProvider';


storiesOf('Post List', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <Theme>
      <Box align="center" style={{ width: '100%' }} pad='medium'>
        <PostListProvider>
          <PostList/>
        </PostListProvider>
      </Box>
    </Theme>
  ))
;