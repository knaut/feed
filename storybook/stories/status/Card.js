import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet, Box, Button, Grid } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import StoryRouter from 'storybook-react-router';

// STYLES
import styles from '../../../src/styles';

// UTILS
import generateStore from '../../../src/utils/generateStore.js';

// COMPONENTS
import Card from '../../../src/components/post/Card.jsx';
import DecoratedCard from '../../../src/components/post/DecoratedCard.jsx';

// MODELS
import Status from '../../../src/models/Status';

// SPOOF USER
import spoof from '../../user.json';

const store = generateStore();

storiesOf('Status Card', module)
  .addDecorator(StoryRouter())
  .add('undecorated', () => (
    <Grommet theme={grommet}>
      <div 
        style={{
          background: styles.colors.darks.purple,
          ...styles.app.container,
          justifyContent: 'start'
        }}
      >
        <Box align="center" style={{ width: '100%' }} pad='medium'>
          <Card post={
            new Status({
              text: `Non irure ut sint nostrud magna cillum dolor proident labore ad dolor minim magna cupidatat ut velit do sit ullamco eiusmod consectetur. Officia sunt qui amet sint dolore eu laborum voluptate fugiat sit ea esse id dolor esse exercitation laboris sint dolore pariatur velit consectetur exercitation enim ea consectetur sint et occaecat duis reprehenderit.`,
              Profile: spoof.user.username,
            }).getProps()
          }/>
        </Box>
      </div>
    </Grommet>
  ))
  .add('decorated', () => (
    <Grommet theme={grommet}>
      <div 
        style={{
          background: styles.colors.darks.purple,
          ...styles.app.container,
          justifyContent: 'start'
        }}
      >
        <Box align="center" style={{ width: '100%' }} pad='medium'>
          <DecoratedCard 
            post={
              new Status({
                text: `Non irure ut sint nostrud magna cillum dolor proident labore ad dolor minim magna cupidatat ut velit do sit ullamco eiusmod consectetur. Officia sunt qui amet sint dolore eu laborum voluptate fugiat sit ea esse id dolor esse exercitation laboris sint dolore pariatur velit consectetur exercitation enim ea consectetur sint et occaecat duis reprehenderit.`,
                Profile: spoof.user.username
              }).getProps()
            }
            actions={{
              delete: function(payload) {
                console.log('delete', payload)
              }
            }}
          />
        </Box>
      </div>
    </Grommet>
  ))
  .add('permalinked, is loaded, is on blockstack', () => (
    <Grommet theme={grommet}>
      <div 
        style={{
          background: styles.colors.darks.purple,
          ...styles.app.container,
          justifyContent: 'start'
        }}
      >
        <Box align="center" style={{ width: '100%' }} pad='medium'>
          <Card
            isLoading={false}
            isMe={false}
            image={spoof.user.image}
            post={
              new Status({
                text: `Non irure ut sint nostrud magna cillum dolor proident labore ad dolor minim magna cupidatat ut velit do sit ullamco eiusmod consectetur. Officia sunt qui amet sint dolore eu laborum voluptate fugiat sit ea esse id dolor esse exercitation laboris sint dolore pariatur velit consectetur exercitation enim ea consectetur sint et occaecat duis reprehenderit.`,
                Profile: spoof.user.username,
              }).getProps()
            }
            name={spoof.user.name}
          />
        </Box>
      </div>
    </Grommet>
  ))
;