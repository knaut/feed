// IMPORTS
import React, { Component } from 'react';

// STYLES
import css from '@emotion/css'

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

  const noAvatar = (<User color='purplePastel' size='xlarge'/>);
  const avatar = (<Image src={image} fit="cover" />);
  const isMeTag = (
    <Box justify="center" align="center">
      <Button margin='small'>
        <Box
          background='cyan'
          round={'xlarge'}
          pad={{
            top: 'xxsmall',
            left: 'small',
            right: 'small',
            bottom: 'xxsmall'
          }}
        >
          <Text 
            size='small' 
            color='light'
            css={css`
              font-style: italic;
              font-weight: bold;
            `}>This is you!</Text>
        </Box>
      </Button>
    </Box>
  );

  const loading = (
    <React.Fragment>
      <Box justify="center" align="center">
        <Box 
          background='purple' 
          round='full'
          justify="center"
          align="center"
          css={css`
            border: '5px solid var(--gray1);
            width: 150px;
            height: 150px;
            overflow: hidden;
          `}
        >
          <Box>
            <HashLoader
              color='purplePastel'
              loading={true}
              size={75}
            />
          </Box>
        </Box>
      </Box>
      <Box
        justify="center"
        align="center"
        pad='small'
      >
        <Text level={1} size='medium' color='gray1'>
          {`Looking up "${username}"…`}
        </Text>
      </Box>
    </React.Fragment>
  );

  const loaded = (
    <React.Fragment>
      <Box justify="center" align="center">
        <Box 
          background='purple' 
          round='full' 
          justify="center" 
          align="center"
          css={css`
            border: '5px solid var(--gray1);
            width: 150px;
            height: 150px;
            overflow: hidden;
          `}
        >
          <Box css={css`${ image ? 'width: 100%; height: 100%;' : null}`}>
            {image ? avatar : noAvatar}
          </Box>
        </Box>
      </Box>
      <Box
        justify="center"
        align="center"
        pad={{top: 'small'}}
      >
        <Text
          level={1}
          size={'medium'}
          color='gray1'
          css={css`letter-spacing: 2px;`}
        >
          {username}
        </Text>
      </Box>
      { isMe ? isMeTag : null }
    </React.Fragment>
  );

  const notOnBlockstack = (
    <React.Fragment>
      <Box justify="center" align="center">
        <Box
          background='purple'
          round='full' 
          justify="center"
          align="center"
          css={css`
            border: '5px solid var(--gray1);
            width: 150px;
            height: 150px;
            overflow: hidden;
          `}
        >
          <Box>
            <Help color='redPastel' size='xlarge'/>
          </Box>
        </Box>
      </Box>
      <Box justify="center" align="center" pad={{top: 'small'}}>
        <Text level={1} size='medium' color='gray1'>
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