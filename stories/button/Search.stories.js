import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet, Box, Button, Grid } from 'grommet';
import { grommet, dark } from 'grommet/themes';

// STYLES
import styles from '../../src/styles';

// COMPONENTS
import Search from '../../src/components/button/Search';

storiesOf('Button - Search', module)
  .add('inactive', () => (
    <Grommet theme={grommet}>
      <div 
        style={{
          background: styles.colors.darks.purple,
          ...styles.app.container,
          justifyContent: 'start'
        }}
      >
        <Search />
      </div>
    </Grommet>
  ))
;