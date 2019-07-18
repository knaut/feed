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
import Layout from '../src/screens/Layout'
import SignOutPill from '../src/components/SignOut/Pill'

storiesOf('Sign Out', module)
  .addDecorator(StoryRouter())
  .addDecorator(getStory => (
    <Theme>
      { getStory() }
    </Theme>
  ))
  .add('pill', () => (
    <SignOutPill/>
  ))
  

