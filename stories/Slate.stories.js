// IMPORTS
import React from 'react'

// STORYBOOK UTILS
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import StoryRouter from 'storybook-react-router'

// COMPONENTS
import Theme from '../src/Theme'
import Layout from '../src/screens/Layout'
import Slate from '../src/components/Slate/Slate'

import { Box } from 'grommet'

// CONFIG
import { user } from '../.storybook/user.json'

// import ReduxProvider from './helpers/ReduxProvider'


// STYLES
import css from '@emotion/css'

storiesOf('Slate', module)
  .addDecorator(getStory => (
    <Theme>
      <Layout columns={false}>
        <Box fill background='purpleDark' pad='large' width='medium'>
        { getStory() }
        </Box>
      </Layout>
    </Theme>
  ))
  .add('active', () => (
    <Slate
      user={user}
      active
      actions={{
        submit: function (payload) {
          console.log({ payload })
        }
      }}
    />
  ))
  .add('inactive', () => (
    <Slate
      user={user}
      active={false}
      actions={{
        submit: function (payload) {
          console.log({ payload })
        }
      }}
    />
  ))
