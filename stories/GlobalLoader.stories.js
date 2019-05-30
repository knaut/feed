// IMPORTS
import React from 'react'

// STORYBOOK UTILS
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import StoryRouter from 'storybook-react-router';

// COMPONENTS
import { Grommet } from 'grommet'
import { grommet, dark } from 'grommet/themes'
import GlobalLoader from '../src/components/GlobalLoader';

storiesOf('GlobalLoader', module)
  .addDecorator(StoryRouter())
  .add('loading', () => (
    <Grommet theme={grommet}>
      <GlobalLoader isLoading={true}/>
    </Grommet>
  ))
  .add('loaded', () => (
    <Grommet theme={grommet}>
      <GlobalLoader isLoading={false}/>
    </Grommet>
  ))