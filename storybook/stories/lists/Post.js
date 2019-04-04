import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet, Box, Button, Grid } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import StoryRouter from 'storybook-react-router';

// STYLES
import styles from '../../../src/styles';

// COMPONENTS
import Posts from '../../../src/components/list/Posts.jsx';

storiesOf('Post List', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <Grommet theme={grommet}>
      <div 
        style={{
          background: styles.colors.darks.purple,
          ...styles.app.container,
          justifyContent: 'start'
        }}
      >
        <Box align="center" style={{ width: '100%' }} pad='medium'>
          <Posts />
        </Box>
      </div>
    </Grommet>
  ))
;