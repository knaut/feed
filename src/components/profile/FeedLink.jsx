// IMPORTS
import React, { Component } from 'react';

// STYLES
import styles from '../../styles';

// COMPONENTS
import { Grommet, Box, Button, Grid, TextArea, Heading, Text, Image } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Add, Star, Note, SubtractCircle, Gremlin, Help, User, Login, LinkNext } from 'grommet-icons';
import { FadeLoader, BarLoader, HashLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

const FeedLink = (props) => {
  const {
    username,
    isOnBlockstack,
    isOnFeed,
    isMe,
    name,

    profiles
  } = props;

  const noId = (
    <Box align='center' pad='medium' style={{
      textAlign: 'center',
      border: `1px solid ${styles.colors.neutrals.gray2}`,
      borderRadius: '10px',
      background: `${styles.colors.neutrals.light}`
    }}>
      <Text level={3}>
        <span>{`We couldn't find anyone on Blockstack with the id of "${username}".`}</span>
      </Text>
    </Box>
  );

  const noFeed = (
    <Box align='center' pad='medium' style={{
      textAlign: 'center',
      border: `1px solid ${styles.colors.neutrals.gray2}`,
      borderRadius: '10px',
      background: `${styles.colors.neutrals.light}`
    }}>
      <Text level={3}>
        <span>{`Looks like "${username}" has a Blockstack ID, but has not signed into `}</span>
        <span style={{fontWeight: 'bold', color: styles.colors.primaries.purple}}>feed</span>
        <span>{` yet.`}</span>
      </Text>
    </Box>
  );

  const feed = (
    <Box align='center' pad='medium'>
      <Link to={ isMe === true ? `/feed` : `/${username}/feed` }>
        <Button icon={<LinkNext />} label={ isMe === true ? `go to your feed` : `go to ${name}'s feed` } primary style={{
        }}/>
      </Link>
    </Box>
  );

  if (isOnBlockstack) {
    
    if (isOnFeed === true) {
      return feed;
    } else if (isOnFeed === false) {
      return noFeed;
    } else {
      return null;
    }

  } else {
    return noId;
  }
}

export default FeedLink;