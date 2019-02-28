// IMPORTS
import React, { Component } from 'react';

// STYLES
import styles from '../../../src/styles';

// COMPONENTS
import { Grommet, Box, Button, Grid, TextArea, Heading, Text, Image } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Add, Star, Note, SubtractCircle, Gremlin, Help, User } from 'grommet-icons';
import { FadeLoader, BarLoader, HashLoader } from 'react-spinners';

import Avatar from './Avatar.jsx';
import FeedLink from './FeedLink.jsx';

class ProfileCard extends Component {
  render() {
    const {
      isLoading,
      isOnBlockstack,
      isMe,
      isOnFeed,
      image,
      name,
      username,
      description
    } = this.props;

    return (
      <Box align="center" pad="medium">
        <Box
          pad='medium'
          gap='small'
          round
          style={{
            background: 'white',
            width: '100%',
            maxWidth: '800px'
          }}
        >
          <header>
            <Avatar {...this.props} />
          </header>
          <Heading level={1} size={'small'}>
            {this.props.name}
          </Heading>
          <Text level={1} size={'medium'} margin={{bottom: 'small'}} style={{display: 'block'}}>
            {this.props.description}
          </Text>
          <FeedLink {...this.props} />
        </Box>
      </Box>
    );
  }
}

export default ProfileCard;