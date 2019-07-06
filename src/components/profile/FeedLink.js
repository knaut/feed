// IMPORTS
import React, { Component } from 'react';

// STYLES
import css from '@emotion/css'

// COMPONENTS
import { Grommet, Box, Button, Grid, TextArea, Heading, Text, Image } from 'grommet';
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
    <Box
      background='light'
      align='center'
      pad='medium'
      css={css`
        text-align: center;
        border: 1px solid var(--gray2);
        border-radius: 10px;
      `}
      >
      <Text level={3}>
        <span>{`We couldn't find anyone on Blockstack with the id of "${username}".`}</span>
      </Text>
    </Box>
  );

  const noFeed = (
    <Box
      background='light'
      align='center'
      pad='medium'
      css={css`
        text-align: center;
        border: 1px solid var(--gray2);
        border-radius: 10px;
      `}
    >
      <Text level={3}>
        <span><strong>{username}</strong> has a Blockstack ID, but has not signed into </span>
        <span css={css`font-weight: bold;`} color='purple'>feed</span>
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

  const dontShow = (
    <Box
      background='light'
      align='center'
      pad='medium'
      css={css`
        text-align: center;
        border: 1px solid var(--gray2);
        border-radius: 10px;
      `}
    >
      <Text level={3}>
        <span><strong>{username}</strong> has a Blockstack ID, but you need to log into Blockstack to see any posts.</span>
      </Text>
    </Box>
  )

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