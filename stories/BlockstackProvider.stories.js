// IMPORTS
import React from 'react'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'

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
import BlockstackProvider from '../src/components/BlockstackProvider'

// REDUX UTILS
import generateStore from '../src/utils/generateStore'

const store = generateStore()
const history = createBrowserHistory()

storiesOf('BlockstackProvider', module)
  .addDecorator(story => (
    <Theme>
      <Box fill background='light'>
        <Provider store={store}>{story()}</Provider>
      </Box>
    </Theme>
  ))
  .add('default', () => (
    <BlockstackProvider>
      BlockstackProvider Test
    </BlockstackProvider>
  ))
