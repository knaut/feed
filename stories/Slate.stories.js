// IMPORTS
import React from 'react'

// STORYBOOK UTILS
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import StoryRouter from 'storybook-react-router';

// COMPONENTS
import { Grommet } from 'grommet'
import { grommet, dark } from 'grommet/themes'
import GlobalLoader from '../src/components/GlobalLoader.jsx';
// import Counter from '../src/components/slate/Counter.jsx';
import Slate from '../src/components/slate/Slate.jsx';

// STYLES
import styles from '../src/styles';

// CONFIG
import { user } from '../.storybook/user.json';

storiesOf('Slate', module)
  .add('active', () => (
    <Grommet theme={grommet}>
      <div 
        style={{
          background: styles.colors.darks.purple,
          ...styles.app.container,
          justifyContent: 'start'
        }}
      >
        <Slate 
          user={user}
          active={true}
          actions={{
            submit: function(payload) {
              console.log({payload});
            }
          }}/>
      </div>
    </Grommet>
  ))
  .add('inactive', () => (
    <Grommet theme={grommet}>
      <div 
        style={{
          background: styles.colors.darks.purple,
          ...styles.app.container,
          justifyContent: 'start'
        }}
      >
        <Slate 
          user={user}
          active={false}
          actions={{
            submit: function(payload) {
              console.log({payload});
            }
          }}/>
      </div>
    </Grommet>
  ))
;