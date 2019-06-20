// IMPORTS
import React from 'react'

// STORYBOOK UTILS
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import StoryRouter from 'storybook-react-router';

// COMPONENTS
import Theme from '../src/Theme'
import GlobalLoader from '../src/components/GlobalLoader';

storiesOf('GlobalLoader', module)
  .addDecorator(StoryRouter())
  .add('loading', () => (
    <Theme>
      <GlobalLoader isLoading={true}/>
    </Theme>
  ))
  .add('loaded', () => (
    <Theme>
      <GlobalLoader isLoading={false}/>
    </Theme>
  ))