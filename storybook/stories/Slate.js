import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet, Box, Button, Grid } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import StoryRouter from 'storybook-react-router';
import Slate from '../../src/components/slate/Slate.jsx';
import Counter from '../../src/components/slate/Counter.jsx';

// STYLES
import styles from '../../src/styles';

// UTILS
import generateStore from '../../src/utils/generateStore.js';

// CONFIG
import { user } from '../user.json';

const store = generateStore();

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
          actions={{
            submit: function(payload) {
              console.log({payload});
            }
          }}/>
      </div>
    </Grommet>
  ))
;