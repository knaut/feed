// IMPORTS
import React, { Component } from 'react';

// STYLES
import styles from '../../../src/styles';

// COMPONENTS
import {
  Grommet,
  Box,
  Button,
  Grid,
  TextArea,
  Heading,
  Text,
  Image
} from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Add, Star, Note, SubtractCircle, Gremlin, Help, User } from 'grommet-icons';
import { FadeLoader, BarLoader, HashLoader } from 'react-spinners';

import Avatar from './Avatar';
import FeedLink from './FeedLink';

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
      <Box align="center">
        <Box
          width='large'
          background='white'
          pad='medium'
          gap='small'
          round
        >
          <header>
            <Avatar {...this.props} />
            <Heading level={1} size={'small'} style={{
              textAlign: 'center'
            }}>
              {this.props.name}
            </Heading>
            <Text level={1} size={'medium'} margin={{bottom: 'small'}} style={{
              display: 'block',
              textAlign: 'center'
            }}>
              {this.props.description}
            </Text>
          </header>
          <FeedLink {...this.props} />
        </Box>
      </Box>
    );
  }
}

export default ProfileCard;