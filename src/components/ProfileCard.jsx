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

window.blockstack = blockstack;

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
    id
  }
}

class ProfileCard extends Component {
  state = {
    isLoaded: false,
    isValid: false
  }

  async componentDidMount() {

    // load a blockstack profile based on our route
    if (this.props.id === this.props.username) {
      // this profile matched our own login; it's our profile
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

    } else {
      // this is someone else's profile
      const profile = await blockstack.lookupProfile(`${this.props.username}.id.blockstack`);
      console.log(profile);

      const person = new blockstack.Person(profile);

      console.log(person);

      const image = person.avatarUrl();
      const name = person.name();
      const json = person.toJSON();

      // console.log({json});

      this.setState({
        isLoaded: true,
        isValid: true,

      })

    }

  }

  // renderMyProfile() {
  //   return (

  //   );
  // }

  // renderFeedProfile() {
  //   return (

  //   );
  // }

  // renderBlockstackProfile() {
  //   return (

  //   );
  // }

  renderEmptyProfile(username) {
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
                  <User color={styles.colors.pastels.purple} size='xlarge'/>
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
                  <HashLoader
                    color={styles.colors.pastels.purple}
                    loading={true}
                    size={75}
                  />
                </Box>
              </Box>
            </Box>
            <Box pad={'small'}>
              <Text level={1} size={'medium'} style={{
                color: styles.colors.neutrals.gray1
              }}>
                {`Looking up "${username}"…`}
              </Text>
            </Box>
          </header>
        </Box>
      </Box>
    );
  }

  render() {
    return this.renderNoProfileFound(this.props.username);

    /*return (
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
    );*/
  }
}

export default connect(mapStateToProps)(ProfileCard);