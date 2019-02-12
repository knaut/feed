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
    // const {
    //   isLoading,
    //   isOnBlockstack,
    //   isMe,
    //   isOnFeed,
    //   image,
    //   name,
    //   description
    // } = this.props;

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
        </Box>
      </Box>
    );
  }
}

export default ProfileCard;