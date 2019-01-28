// IMPORTS
import React, { Component } from 'react';

// STYLES
import styles from '../../styles';

// COMPONENTS
import { Grommet, Box, Button, Grid, TextArea, Heading, Text, Image } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Add, Star, Note, SubtractCircle, Gremlin, Help, User } from 'grommet-icons';
import { FadeLoader, BarLoader, HashLoader } from 'react-spinners';

const Avatar = (props) => {
  const {
    isLoading,
    isOnBlockstack,
    username,
    image
  } = props;

  console.log({props})

  const noAvatar = (<User color={styles.colors.pastels.purple} size='xlarge'/>);
  const avatar = (<Image src={image} fit="cover" />);

  const loading = (
    <React.Fragment>
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
    </React.Fragment>
  );

  const loaded = (
    <React.Fragment>
      <Box justify="center" align="center">
        <Box background={styles.colors.primaries.purple} round={'full'} 
          justify="center" align="center"
          style={{
            border: `5px solid ${styles.colors.neutrals.gray1}`,
            width: '150px',
            height: '150px',
            overflow: 'hidden'
          }}>
          <Box style={{
            width: '100%',
            height: '100%'
          }}>
            {image ? avatar : noAvatar}
          </Box>
        </Box>
      </Box>
      <Box pad={{top: 'small'}}>
        <Text level={1} size={'medium'} style={{
          letterSpacing: '2px',
          color: styles.colors.neutrals.gray1
        }}>
          {username}
        </Text>
      </Box>
    </React.Fragment>
  );

  const notOnBlockstack = (
    <React.Fragment>
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
      <Box pad={{top: 'small'}}>
        <Text level={1} size={'medium'} style={{
          color: styles.colors.neutrals.gray1
        }}>
          {`"${username}" was not found.`}
        </Text>
      </Box>
    </React.Fragment>
  );

  if (isLoading === true) {
    return loading;
  } else {

    if (isOnBlockstack === true) {
      return loaded;
    } else {
      return notOnBlockstack;
    }

  }
    
  
}

export default Avatar;