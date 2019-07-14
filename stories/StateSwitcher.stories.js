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
import StateSwitcher from '../src/components/SignIn/StateSwitcher'

storiesOf('SignIn State', module)
  .addDecorator(StoryRouter())
  .addDecorator(getStory => (
    <Theme>
      { getStory() }
    </Theme>
  ))
  .add('has feed, is authed', () => (
    <StateSwitcher 
      id={'testuser1'}
      isAuthenticated={true}
      isAuthenticating={false}
      hasFeed={true}
      cacheIsLoading={false}
      cacheIsLoaded={true}
      onClick={() => console.log(this)}  
    />
  ))
  .add('is authing, is fetching cache', () => (
    <StateSwitcher 
      id={'testuser1'}
      isAuthenticated={false}
      isAuthenticating={true}
      hasFeed={false}
      cacheIsLoading={true}
      cacheIsLoaded={false}
      onClick={() => console.log(this)}  
    />
  ))
  .add('is authed, is fetching cache', () => (
    <StateSwitcher 
      id={'testuser1'}
      isAuthenticated={true}
      isAuthenticating={false}
      hasFeed={false}
      cacheIsLoading={true}
      cacheIsLoaded={false}
      onClick={() => console.log(this)}  
    />
  ))
  .add('is authing, is not fetching cache', () => (
    <StateSwitcher 
      id={'testuser1'}
      isAuthenticated={false}
      isAuthenticating={true}
      hasFeed={false}
      cacheIsLoading={false}
      cacheIsLoaded={false}
      onClick={() => console.log(this)}  
    />
  ))
  .add('is not authed, is not fetching cache', () => (
    <StateSwitcher 
      id={'testuser1'}
      isAuthenticated={false}
      isAuthenticating={false}
      hasFeed={false}
      cacheIsLoading={false}
      cacheIsLoaded={false}
      onClick={() => console.log(this)}  
    />
  ))