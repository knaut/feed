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

storiesOf('Theme', module)
  .add('Box Test', () => (
    <Theme>
      <Box fill background='light'>Test</Box>
    </Theme>
  ))
