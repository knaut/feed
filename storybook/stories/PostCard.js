import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet, Box, Button, Grid } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import StoryRouter from 'storybook-react-router';

// STYLES
import styles from '../../src/styles';

// UTILS
import generateStore from '../../src/utils/generateStore.js';

const store = generateStore();

storiesOf('Card', module)
  .add('plain', () => (
    <Grommet theme={grommet}>
      <div 
        style={{
          background: styles.colors.darks.purple,
          ...styles.app.container,
          justifyContent: 'start'
        }}
      >
        
      </div>
    </Grommet>
  ))
;