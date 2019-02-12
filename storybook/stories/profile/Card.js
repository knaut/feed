import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet, Box, Button, Grid } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import ProfileCard from '../../../src/components/profile/Card.jsx';

import spoof from '../../user.json';

storiesOf('Profile Card', module)
  .add('loading', () => (
    <Grommet theme={grommet}>
      <ProfileCard
        isLoading={false}
        isOnBlockstack={false}
        isMe={false}
        username={spoof.user.username}
        image={null}
      />
    </Grommet>
  ))
;