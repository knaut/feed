// IMPORTS
import React, { Component } from 'react';

// STYLES
import styles from '../../styles';

// COMPONENTS
import { Grommet, Box, Button, Grid, TextArea, Heading, Text, Image } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Add, Star, Note, SubtractCircle, Gremlin, Help, User, Login, LinkNext, Home } from 'grommet-icons';
import { FadeLoader, BarLoader, HashLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

const FeedLink = (props) => {
  const {
    username,
    isLoading,
    isOnBlockstack,
    isOnFeed,
    isMe,
    name
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
        <span><strong>{username}</strong> has a Blockstack ID, but has not signed into </span>
        <span style={{fontWeight: 'bold', color: styles.colors.primaries.purple}}>feed</span>
        <span>{` yet.`}</span>
      </Text>
    </Box>
  );

  const feed = (
    <Box align='center' pad='medium'>
      <Link to={ `/${username}/feed` }>
        <Button icon={<Home />} label={ isMe === true ? `go to your feed` : `go to ${name}'s feed` } primary style={{
        }}/>
      </Link>
    </Box>
  );

  if (isLoading) {
    return null;
  } else {
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
  
}

export default FeedLink;