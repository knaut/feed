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

import Avatar from './profile/Avatar.jsx';

window.blockstack = blockstack;

/*
const Avatar = (state) => {
  const {
    isLoaded,
    isValid,
    image
  } = state;

  if (isLoaded === true && isValid === true) {
  
    return (
      <Box background={styles.colors.primaries.purple} round={'full'} style={{
        border: `5px solid ${styles.colors.neutrals.gray1}`,
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
          border: `5px solid ${styles.colors.neutrals.gray1}`,
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
          border: `5px solid ${styles.colors.neutrals.gray1}`,
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
          border: `5px solid ${styles.colors.neutrals.gray1}`,
          width: '150px',
          height: '150px',
          overflow: 'hidden'
        }}>
        <Gremlin color={styles.colors.pastels.red} size='large'/>
      </Box>
    );
  
  }
}
*/

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
    isOnFeed: null,
    isMe: this.props.id === this.props.username,
    username: this.props.username,
    image: null,
    name: null,
    description: null
  }

  async componentDidMount() {
    const { 
      id,
      username,
      profiles
    } = this.props;

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
          isOnFeed: profiles.indexOf(id) > -1,
          image: image[0].contentUrl,
          name,
          description
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
          isOnFeed: profiles.indexOf(username) > -1,
          image,
          name,
          description
        });

      }  

    } catch (error) {
      console.error(error);

      this.setState({
        isLoading: false,
        isOnBlockstack: false,
        isMe: false,
        isOnFeed: false,
        image: false,
        name: false,
        description: false
      });

    }

  }

  /*
  renderBlockstackProfile(username, image, name, description) {
    let isMe = false;
    if (this.props.username.split('.')[0] === username) {
      isMe = true;
    }

    

    const loadedUserName = name ? name : null;
    const loadedUserDesc = description ? description : null;

    // console.log(`${this.constructor.name} renderLoadingProfile`);

    return (
      <Box align="center" pad="medium">
        <Box
          pad='medium'
          gap='small'
          round
          style={{
            background: 'white',
            width: '100%',
            maxWidth: '800px',
            minHeight: '320px'
          }}
        >
          <header>
            
            <Heading level={1} size={'small'}>
              {loadedUserName}
            </Heading>
            <Heading level={4} size={'small'} style={{padding:0, margin: 0, width: '100%', maxWidth: 'inherit'}}>
              {loadedUserDesc}
            </Heading>
          </header>
          <Box pad='medium' style={{
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
        </Box>
      </Box>
    );
  }

  renderNoProfileFound(username) {
    console.log(`${this.constructor.name} renderLoadingProfile`);
    return (
      <Box align="center" pad="medium">
        <Box
          pad='medium'
          gap='small'
          round
          style={{
            background: 'white',
            width: '100%',
            maxWidth: '800px',
            minHeight: '320px'
          }}
        >
          <header>
            <Box justify="center" align="center">
              <Box background={styles.colors.primaries.purple} round={'full'} 
                justify="center" align="center"
                style={{
                  border: `5px solid ${styles.colors.neutrals.gray1}`,
                  width: '150px',
                  height: '150px',
                  overflow: 'hidden'
                }}>
                <Box>
                  <Help color={styles.colors.pastels.red} size='xlarge'/>
                </Box>
              </Box>
            </Box>
            <Box pad={'small'}>
              <Text level={1} size={'medium'} style={{
                color: styles.colors.neutrals.gray1
              }}>
                {`We couldn't find anyone by the name of "${username}". They may not have a Blockstack ID.`}
              </Text>
            </Box>
          </header>
        </Box>
      </Box>
    );
  }

  renderLoadingProfile(username) {
    console.log(`${this.constructor.name} renderLoadingProfile`);
    return (
      <Box align="center" pad="medium">
        <Box
          pad='medium'
          gap='small'
          round
          style={{
            background: 'white',
            width: '100%',
            maxWidth: '800px',
            minHeight: '320px'
          }}
        >
          <header>
            <Avatar 
              isLoading={false}
              username={username}
            />
          </header>
        </Box>
      </Box>
    );
  }
  */
  render() {
    console.log(this.state);
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
            <Box justify="center" align="center">
              <Avatar {...this.state} />
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

export default connect(mapStateToProps)(ProfileCard);