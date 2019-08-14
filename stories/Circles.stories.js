import React from 'react'
import Moment from 'moment'
import { storiesOf } from '@storybook/react'
import { Grommet, Box, Button, Grid } from 'grommet'
import { grommet, dark } from 'grommet/themes'
import StoryRouter from 'storybook-react-router'

import spoof from '../.storybook/user.json'

// COMPONENTS
// import Avatar from '../src/components/Avatar'
import Theme from '../src/Theme'
import Layout from '../src/screens/Layout'
import { CirclesButton } from '../src/components/GlobalToolbar/Circles'
import CirclesListItem from '../src/components/Circles/ListItem'

// import ReduxProvider from './helpers/ReduxProvider'

storiesOf('Circles', module)
  .addDecorator(StoryRouter())
  .addDecorator(getStory => (
    <Theme>
      <Box fill background='purpleDark' pad='medium'>
        <Layout columns={true}>
          { getStory() }
        </Layout>
      </Box>
    </Theme>
  ))
  .add('Button - inactive', () => (
    <CirclesButton />
  ))
  .add('Button - active', () => (
    <CirclesButton active={true} />
  ))
  .add('List Item', () => (
    <CirclesListItem 
      username={spoof.user.username}
      image={spoof.user.image}
      name={spoof.user.name}
      timestamp={ Moment() }
    />
  ))