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
    isMe,
    username,
    image,
    mini
  } = props;

  const noAvatar = (<User color={styles.colors.pastels.purple} size='xlarge'/>);
  const avatar = (<Image src={image} fit="cover" />);
  const isMeTag = (
    <Box justify="center" align="center">
      <Button margin='small'>
        <Box
          style={{
            background: styles.colors.primaries.cyan
          }}
          round={'xlarge'}
          pad={{
            top: 'xxsmall',
            left: 'small',
            right: 'small',
            bottom: 'xxsmall'
          }}
        >
          <Text size={'small'} style={{
            color: styles.colors.neutrals.light,
            fontStyle: 'italic',
            fontWeight: 'bold'
          }}>This is you!</Text>
        </Box>
      </Button>
    </Box>
  );

  const loading = (
    <React.Fragment>
      <Box justify="center" align="center">
        <Box background={styles.colors.primaries.purple} round={'full'} 
          justify="center" align="center"
          style={ styles.avatar }>
          <Box>
            <HashLoader
              color={styles.colors.pastels.purple}
              loading={true}
              size={75}
            />
          </Box>
        </Box>
      </Box>
      <Box justify="center" align="center" pad={'small'}>
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
          style={ styles.avatar }>
          <Box style={image ? {
            width: '100%',
            height: '100%'
          } : {}}>
            {image ? avatar : noAvatar}
          </Box>
        </Box>
      </Box>
      <Box justify="center" align="center" pad={{top: 'small'}}>
        <Text level={1} size={'medium'} style={{
          letterSpacing: '2px',
          color: styles.colors.neutrals.gray1
        }}>
          {username}
        </Text>
      </Box>
      { isMe ? isMeTag : null }
    </React.Fragment>
  );

  const notOnBlockstack = (
    <React.Fragment>
      <Box justify="center" align="center">
        <Box background={styles.colors.primaries.purple} round={'full'} 
          justify="center" align="center"
          style={ styles.avatar }>
          <Box>
            <Help color={styles.colors.pastels.red} size='xlarge'/>
          </Box>
        </Box>
      </Box>
      <Box justify="center" align="center" pad={{top: 'small'}}>
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