import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet, Box, Button, Grid } from 'grommet';
import { grommet, dark } from 'grommet/themes';

// STYLES
import styles from '../../../src/styles';

// COMPONENTS
import AddPost from '../../../src/components/button/AddPost.jsx';

storiesOf('Button - AddPost', module)
  .add('inactive', () => (
    <Grommet theme={grommet}>
      <div 
        style={{
          background: styles.colors.darks.purple,
          ...styles.app.container,
          justifyContent: 'start'
        }}
      >
        <AddPost 
          active={false}
          actions={{
            add: function(payload) {
              console.log('add', payload);
            }
          }}
        />
      </div>
    </Grommet>
  ))
  .add('active', () => (
    <Grommet theme={grommet}>
      <div 
        style={{
          background: styles.colors.darks.purple,
          ...styles.app.container,
          justifyContent: 'start'
        }}
      >
        <AddPost 
          active={true}
          actions={{
            add: function(payload) {
              console.log('add', payload);
            }
          }}
        />
      </div>
    </Grommet>
  ))
;