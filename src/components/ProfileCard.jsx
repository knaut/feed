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
import { Add, Star, Note, SubtractCircle, Gremlin } from 'grommet-icons';
import { FadeLoader, BarLoader } from 'react-spinners';

const Avatar = (state) => {
  const {
    isLoaded,
    isValid,
    image
  } = state;

  if (isLoaded === true && isValid === true) {
  
    return (
      <Box background={styles.colors.primaries.purple} round={'full'} style={{
        width: '150px',
        height: '150px',
        overflow: 'hidden'
      }}>
        <Image src={image[0].contentUrl} fit="cover" />
      </Box>
    );
  
  } else if (isLoaded === true && isValid === false) {

    return (
      <Box background={styles.colors.primaries.purple} round={'full'} 
        justify="center" align="center"
        style={{
          width: '150px',
          height: '150px',
          overflow: 'hidden'
        }}>
        <Gremlin color={styles.colors.pastels.red} size='large'/>
      </Box>
    );

  } else if (isLoaded === false) {

    return (
      <Box background={styles.colors.primaries.purple} round={'full'} 
        justify="center" align="center"
        style={{
          width: '150px',
          height: '150px',
          overflow: 'hidden'
        }}>
        <Box
          style={{
              position: 'relative',
              left: '5px'
          }}>
          <FadeLoader
            color={styles.colors.pastels.purple}
            loading={true}
          />
        </Box>
      </Box>
    );

  } else {
    
    return (
      <Box background={styles.colors.primaries.purple} round={'full'} 
        justify="center" align="center"
        style={{
          width: '150px',
          height: '150px',
          overflow: 'hidden'
        }}>
        <Gremlin color={styles.colors.pastels.red} size='large'/>
      </Box>
    );
  
  }
}

const ProfileName = (state) => {
  const {
    isLoaded,
    isValid,
    username
  } = state;

  if (isLoaded === true && isValid === true) {
  
    return (
      <Text level={1} size={'medium'} style={{
        letterSpacing: '3px',
        color: styles.colors.neutrals.gray1
      }}>
        {username}
      </Text>
    );
  
  } else if (isLoaded === true && isValid === false) {

    return (
      <Text level={1} size={'medium'} style={{
        letterSpacing: '3px',
        color: styles.colors.neutrals.gray1
      }}>
        {`"${username}" is not a blockstack id.`}
      </Text>
    );

  } else if (isLoaded === false) {

    return (
      <Text level={1} size={'medium'} style={{
        color: styles.colors.neutrals.gray1
      }}>
        {`… looking up "${state.routeName}" …`}
      </Text>
    );

  } else {
    
    return (
      <Text level={1} size={'medium'} style={{
        letterSpacing: '3px',
        color: styles.colors.neutrals.gray1
      }}>
        {'Sorry, something went wrong.'}
      </Text>
    );
  
  }
}

class ProfileCard extends Component {
  state = {
    isLoaded: false,
    isValid: false
  }

  async componentDidMount() {
    // load a blockstack profile based on our route
    const profile = await blockstack.lookupProfile(`${this.props.username}.id.blockstack`);

    const { username } = this.props;
    const { name, image, description } = profile;
    const isLoaded = true;
    const isValid = true;

    this.setState({
      isLoaded,
      isValid,
      username,
      name,
      image,
      description
    });
  }

  render() {
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
            <Box justify="center" align="center">
              <Avatar {...this.state} />
            </Box>
            <Box margin='small'>
              <ProfileName {...this.state} routeName={this.props.username}/>
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
    );
  }
}

export default ProfileCard;