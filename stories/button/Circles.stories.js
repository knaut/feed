import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet, Box, Button, Grid } from 'grommet';
import { grommet, dark } from 'grommet/themes';

// STYLES
import styles from '../../src/styles';

// COMPONENTS
import Circles from '../../src/components/button/Circles.jsx';

storiesOf('Button - v2 - Circles', module)
  .add('inactive', () => (
    <Grommet theme={grommet}>
      <div 
        style={{
          background: styles.colors.darks.purple,
          ...styles.app.container,
          justifyContent: 'start'
        }}
      >
        <Circles />
      </div>
    </Grommet>
  ))
;