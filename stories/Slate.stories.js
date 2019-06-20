// IMPORTS
import React from 'react'

// STORYBOOK UTILS
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import StoryRouter from 'storybook-react-router';

// COMPONENTS
import Layout from '../src/Layout';
import Slate from '../src/components/slate/Slate';

// CONFIG
import { user } from '../.storybook/user.json';

storiesOf('Slate', module)
  .add('active', () => (
    <Theme>
      <Layout>
        <Slate 
          user={user}
          active={true}
          actions={{
            submit: function(payload) {
              console.log({payload});
            }
          }}
        />
      </Layout>
    </Theme>
  ))
  .add('inactive', () => (
    <Theme>
      <Layout>
        <Slate 
          user={user}
          active={false}
          actions={{
            submit: function(payload) {
              console.log({payload});
            }
          }}/>
      </Layout>
    </Theme>
  ))
;