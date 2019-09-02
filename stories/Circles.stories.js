import React from 'react'
import Moment from 'moment'
import { storiesOf } from '@storybook/react'
import {
  Grommet,
  Box,
  Button,
  Grid,
  Text
} from 'grommet'

import StoryRouter from 'storybook-react-router'

import spoof from '../.storybook/user.json'

// COMPONENTS
// import Avatar from '../src/components/Avatar'
import Theme from '../src/Theme'
import Layout from '../src/screens/Layout'
import { CirclesButton } from '../src/components/GlobalToolbar/Circles'
import CirclesListItem from '../src/components/Circles/ListItem'
import ManageUserButton from '../src/components/Circles/ManageUserButton'

// import ReduxProvider from './helpers/ReduxProvider'

storiesOf('Circles', module)
  .addDecorator(StoryRouter())
  .addDecorator(getStory => (
    <Theme>
      <Box fill background='purpleDark' pad='medium'>
        
        { getStory() }
        
      </Box>
    </Theme>
  ))
  .add('Button - inactive', () => (
    <Layout columns={true}>
      <CirclesButton />
    </Layout>
  ))
  .add('Button - active', () => (
    <Layout columns={true}>
      <CirclesButton active={true} />
    </Layout>
  ))
  .add('List Item', () => (
    <Layout columns={false}>
      <CirclesListItem 
        username={spoof.user.username}
        image={spoof.user.image}
        name={spoof.user.name}
        timestamp={ Moment() }
      />
    </Layout>
  ))

storiesOf('Circles - Manage User Button', module)
  .addDecorator(StoryRouter())
  .addDecorator(getStory => (
    <Theme>
      <Box fill background='purpleDark' pad='xlarge'>
        <Box round='xlarge' background='white' pad='medium' justify='center' align='center' fill>
          { getStory() }
        </Box>
      </Box>
    </Theme>
  ))
  .add('is in circle', () => (
    <ManageUserButton
      isInUserAuthCircle={true}
    />
  ))
  