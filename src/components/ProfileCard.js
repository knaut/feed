// IMPORTS
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Moment from 'moment';
import * as blockstack from 'blockstack';

// STYLES
import styles from '../styles';

// COMPONENTS
import { Grommet, Box, Button, Grid, TextArea, Heading, Text, Image } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Add, Star, Note, SubtractCircle, Gremlin, Help, User } from 'grommet-icons';
import { FadeLoader, BarLoader, HashLoader } from 'react-spinners';

import Avatar from './profile/Avatar.js';
import FeedLink from './profile/FeedLink.js';

function mapStateToProps(state) {
  const id = state.user.username.split('.')[0];

  return {
    id,
    profiles: state.Profile.ids
  }
}

class ProfileCard extends Component {
  state = {
    isLoading: true,
    isOnBlockstack: null,
    isMe: this.props.id === this.props.username,
    username: this.props.username,
    image: null,
    name: null,
    description: null,

    profiles: this.props.profiles
  }

  async componentDidMount() {
    const { 
      id,
      username
    } = this.props;
    
    const { profiles } = this.state;
    const isOnFeed = profiles.indexOf(id) > -1;

    try {

      // load a blockstack profile based on our route
      if (id === username) {
        // this profile matched our own login; it's our profile
        const profile = await blockstack.lookupProfile(`${id}.id.blockstack`);
        const { name, image, description } = profile;

        this.setState({
          isLoading: false,
          isOnBlockstack: true,
          isMe: true,
          isOnFeed,
          image: image[0].contentUrl,
          name,
          description,
        });

      } else {
        // this is someone else's profile
        const profile = await blockstack.lookupProfile(`${username}.id.blockstack`);
        const person = new blockstack.Person(profile);
        const json = person.toJSON();

        const image = person.avatarUrl();
        const name = json.name ? json.name : false;
        const description = json.description ? json.description : false;

        this.setState({
          isLoading: false,
          isOnBlockstack: true,
          isMe: false,
          isOnFeed,
          image,
          name,
          description,
        });

      }  

    } catch (error) {
      console.error(error);

      this.setState({
        isLoading: false,
        isOnBlockstack: false,
        isMe: false,
        isOnFeed,
        image: false,
        name: false,
        description: false,
      });

    }

  }

  render() {
    const {
      isLoading,
      isOnBlockstack,
      isMe,
      isOnFeed,
      image,
      name,
      description
    } = this.state;
    
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
            <Avatar {...this.state} />
            <Heading level={1} size={'small'}>
              {this.state.name}
            </Heading>
            <Text level={1} size={'medium'} margin={{bottom: 'small'}} style={{display: 'block'}}>
              {this.state.description}
            </Text>
          </header>
          <FeedLink {...this.state} />
        </Box>
      </Box>
    );
  }
}

export default connect(mapStateToProps)(ProfileCard);