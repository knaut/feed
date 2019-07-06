import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grommet, Box, Button, Grid } from 'grommet'
import { grommet, dark } from 'grommet/themes'
import StoryRouter from 'storybook-react-router'

// UTILS
import generateStore from '../../src/utils/generateStore.js'

// COMPONENTS
import Theme from '../../src/Theme'
import Layout from '../../src/Layout'
import Card from '../../src/components/post/Card'

// MODELS
import Status from '../../src/models/Status'

// SPOOF USER
import spoof from '../../.storybook/user.json'

const store = generateStore()

storiesOf('Status Card', module)
  .addDecorator(StoryRouter())
  .addDecorator(getStory => (
    <Theme>
      <Layout columns={false}>
        { getStory() }
      </Layout>
    </Theme>
  ))
  .add('default', () => (
    <Card
      post={
        new Status({
          text: `Non irure ut sint nostrud magna cillum dolor proident labore ad dolor minim magna cupidatat ut velit do sit ullamco eiusmod consectetur. Officia sunt qui amet sint dolore eu laborum voluptate fugiat sit ea esse id dolor esse exercitation laboris sint dolore pariatur velit consectetur exercitation enim ea consectetur sint et occaecat duis reprehenderit.`,
          Profile: spoof.user.username
        }).getProps()
      }
      author={spoof.user}
    />
  ))
