// IMPORTS
import React from 'react'

// STORYBOOK UTILS
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import StoryRouter from 'storybook-react-router'

// COMPONENTS
import {
  Box
} from 'grommet'
import Theme from '../src/Theme'
import GlobalLoader from '../src/components/GlobalLoader/Loader'
import Layout from '../src/screens/Layout'

storiesOf('GlobalLoader', module)
  .addDecorator(StoryRouter())
  .addDecorator(getStory => (
    <Theme>
      { getStory() }
      <Layout columns={true}>
        <Box fill justify='center' align='center' background='accent-2'>Some Stuff behind you!</Box>
      </Layout>
    </Theme>
  ))
  .add('loading', () => (
    <GlobalLoader isLoading />
  ))
  .add('loaded', () => (
    <GlobalLoader isLoading={false} />
  ))
