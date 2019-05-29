import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { Grommet, Box, Button, Grid } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import ProfileCard from '../../src/components/profile/Card.jsx';

import spoof from '../../.storybook/user.json';

// STYLES
import styles from '../../src/styles';

storiesOf('Profile Card', module)
  .addDecorator(StoryRouter())
  .add('loading', () => (
    <Grommet theme={grommet}>
      <div 
          style={{
            background: styles.colors.darks.purple,
            ...styles.app.container,
            justifyContent: 'start'
          }}
        >
        <ProfileCard
          isLoading={true}
          isOnBlockstack={null}
          isMe={null}
          username={spoof.user.username}
          image={null}
        />
      </div>
    </Grommet>
  ))
  .add('id found, is on feed', () => (
    <Grommet theme={grommet}>
      <div 
          style={{
            background: styles.colors.darks.purple,
            ...styles.app.container,
            justifyContent: 'start'
          }}
        >
        <ProfileCard
          isLoading={false}
          isOnBlockstack={true}
          isMe={false}
          isOnFeed={true}
          username={spoof.user.username}
          image={spoof.user.image}
          name={spoof.user.name}
          description={spoof.user.description}
        />
      </div>
    </Grommet>
  ))
  .add('id found, is on feed, is me', () => (
    <Grommet theme={grommet}>
      <div 
          style={{
            background: styles.colors.darks.purple,
            ...styles.app.container,
            justifyContent: 'start'
          }}
        >
        <ProfileCard
          isLoading={false}
          isOnBlockstack={true}
          isMe={true}
          isOnFeed={true}
          username={spoof.user.username}
          image={spoof.user.image}
          name={spoof.user.name}
          description={spoof.user.description}
        />
      </div>
    </Grommet>
  ))
  .add('id found, is not on feed', () => (
    <Grommet theme={grommet}>
      <div 
          style={{
            background: styles.colors.darks.purple,
            ...styles.app.container,
            justifyContent: 'start'
          }}
        >
        <ProfileCard
          isLoading={false}
          isOnBlockstack={true}
          isMe={false}
          isOnFeed={false}
          username={spoof.user.username}
          image={spoof.user.image}
          name={spoof.user.name}
          description={spoof.user.description}
        />
      </div>
    </Grommet>
  ))
  .add('id found, is not on feed, is me', () => (
    <Grommet theme={grommet}>
      <div 
          style={{
            background: styles.colors.darks.purple,
            ...styles.app.container,
            justifyContent: 'start'
          }}
        >
        <ProfileCard
          isLoading={false}
          isOnBlockstack={true}
          isMe={true}
          isOnFeed={false}
          username={spoof.user.username}
          image={spoof.user.image}
          name={spoof.user.name}
          description={spoof.user.description}
        />
      </div>
    </Grommet>
  ))
  .add('id found, is not on feed, is me, no avatar', () => (
    <Grommet theme={grommet}>
      <div 
          style={{
            background: styles.colors.darks.purple,
            ...styles.app.container,
            justifyContent: 'start'
          }}
        >
        <ProfileCard
          isLoading={false}
          isOnBlockstack={true}
          isMe={true}
          isOnFeed={false}
          username={spoof.user.username}
          image={false}
          name={spoof.user.name}
          description={spoof.user.description}
        />
      </div>
    </Grommet>
  ))
  .add('id found, is not on feed, is not me, no avatar', () => (
    <Grommet theme={grommet}>
      <div 
          style={{
            background: styles.colors.darks.purple,
            ...styles.app.container,
            justifyContent: 'start'
          }}
        >
        <ProfileCard
          isLoading={false}
          isOnBlockstack={true}
          isMe={false}
          isOnFeed={false}
          username={spoof.user.username}
          image={false}
          name={spoof.user.name}
          description={spoof.user.description}
        />
      </div>
    </Grommet>
  ))
  .add('not found', () => (
    <Grommet theme={grommet}>
      <div 
          style={{
            background: styles.colors.darks.purple,
            ...styles.app.container,
            justifyContent: 'start'
          }}
        >
        <ProfileCard
          isLoading={false}
          isOnBlockstack={false}
          isMe={false}
          username={spoof.user.username}
          image={null}
        />
      </div>
    </Grommet>
  ))
  
;