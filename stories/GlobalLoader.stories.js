// IMPORTS
import React from 'react'

// STORYBOOK UTILS
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import StoryRouter from 'storybook-react-router'

// COMPONENTS
import Theme from '../src/Theme'
import GlobalLoader from '../src/components/GlobalLoader'
import Layout from '../src/Layout'

storiesOf('GlobalLoader', module)
  .addDecorator(StoryRouter())
  .addDecorator(getStory => (
    <Theme>
      <Layout columns={false}>
        { getStory() }
      </Layout>
    </Theme>
  ))
  .add('loading', () => (
    <GlobalLoader isLoading />
  ))
  .add('loaded', () => (
    <GlobalLoader isLoading={false} />
  ))
