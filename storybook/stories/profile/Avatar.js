import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet, Box, Button, Grid } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import Avatar from '../../../src/components/profile/Avatar.jsx';

storiesOf('Avatar', module)
  .add('no id found', () => (
    <Grommet theme={grommet}>
      <Avatar
        isLoading={false}
        isOnBlockstack={false}
        isMe={false}
        username={'Storybook User'}
        image={null}
      />
    </Grommet>
  )); 