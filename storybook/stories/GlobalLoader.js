import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet, Box, Button, Grid } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import StoryRouter from 'storybook-react-router';
import GlobalLoader from '../../src/components/GlobalLoader.jsx';

storiesOf('GlobalLoader', module)
  .addDecorator(StoryRouter())
  .add('loading', () => (
    <Grommet theme={grommet}>
      <GlobalLoader
        isLoading={true}
      />
    </Grommet>
  ))
  .add('loaded', () => (
    <Grommet theme={grommet}>
      <GlobalLoader
        isLoading={false}
      />
    </Grommet>
  ))
;