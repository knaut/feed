// IMPORTS
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Moment from 'moment';
import * as blockstack from 'blockstack';

// COMPONENTS
import { Grommet, Box, Button, Grid, TextArea, Heading, Text, Image } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Add, Star, Note, SubtractCircle } from 'grommet-icons';

class ProfileCard extends Component {
  state = {
    isLoaded: false
  }
  async componentDidMount() {
    // load a blockstack profile based on our route
    const profile = await blockstack.lookupProfile(`${this.props.username}.id.blockstack`);

    console.log({profile});
    const isLoaded = true;
    const { name, image, description } = profile;

    this.setState({
      name, image, description, isLoaded
    });
  }

  render() {
    return this.state.isLoaded ? (
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
          <Box justify="center" align="center">
            <Box background="brand" round={'full'} style={{
              width: '150px',
              height: '150px',
              overflow: 'hidden'
            }}>
              <Image src={this.state.image[0].contentUrl} fit="cover" />
            </Box>
          </Box>
            <Heading level={1} size={'small'}>
              {this.state.name}
            </Heading>
            <Text level={1} size={'medium'}>
              {this.state.description}
            </Text>
          </header>
        </Box>
      </Box>
    ) : null;
  }
}

export default ProfileCard;