// IMPORTS
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// STYLES
import styles from '../../styles';
/** @jsx jsx */ import { jsx, Global } from '@emotion/core'
import css from '@emotion/css'
import styled from '@emotion/styled'

// COMPONENTS
import { Grommet, Box, Button, Grid, TextArea, Heading, Text, Image } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Add, Star, Note, SubtractCircle, Gremlin, Help, User } from 'grommet-icons';
import { FadeLoader, BarLoader, HashLoader } from 'react-spinners';

const IconImage = (props) => {
  if (props.image) {
    return (
      <Image src={props.image} fit='cover' />
    );
  } else {
    return (
      <User color={styles.colors.pastels.purple} size='large'/>
    );
  }
}

const IconLoading = () => {
  return (
    <IconFrame>
      <HashLoader
        color={styles.colors.pastels.purple}
        loading={true}
        size={35}
      />
    </IconFrame>
  );
}


const LabelLoading = (props) => {
  return (
    <Box justify="center" align="center" pad={'small'}>
      <Text level={1} size={'small'} style={{
        color: styles.colors.neutrals.gray1
      }}>
        {`Fetching "${props.username}"…`}
      </Text>
    </Box>
  );
}

const IconFrame = (props) => {
  const { children } = props;
  return (
    <Box justify="center" align="center">
      <Box
        background={styles.colors.primaries.purple}
        round='full'
        justify='center'
        align='center'
        css={css`
          border: 2px solid ${styles.colors.neutrals.gray1};
          width: 60px;
          height: 60px;
          overflow: hidden;
        `}>
        <Box>
          <Box style={{
            width: '100%',
            height: '100%'
          }}>
            { children }
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const IconLoaded = (props) => {
  const {
    image
  } = props;

  return (
    <IconFrame>
      <IconImage image={image}/>
    </IconFrame>
  );
}

const LabelLoaded = (props) => {
  const {
    name
  } = props;

  return (
    <Text level={1} size={'medium'} style={{
      letterSpacing: 0,
      color: styles.colors.neutrals.dark
    }}>
      {name}
    </Text>
  );
}

class Icon extends Component {
  render() {
    const {
      isLoading,
      image
    } = this.props;

    if (isLoading === true) {
      return <IconLoading/>;
    } else {
      return <IconLoaded image={image}/>;
    }
  }
}

class Label extends Component {
  render() {
    const {
      isLoading,
      name,
      username
    } = this.props;

    if (isLoading === true) {
      return <LabelLoading username={username}/>;
    } else {
      return <LabelLoaded name={name}/>;
    }
  }
}

class PostAvatar extends Component {
  render() {
    const {
      isLoading,
      name,
      image
    } = this.props;

    return (
      <Grid
        areas={[
          { name: 'left', start: [0, 0], end: [0, 0] },
          { name: 'right', start: [1, 0], end: [1, 0] }
        ]}
        columns={['auto', 'auto']}
        rows={['flex']}
        gap='small'
        style={{display: 'auto'}}
      >
        <Box
          gridArea='left'
          align='start'
        >
          <Icon {...this.props} />
        </Box>
        <Box
          gridArea='right'
          justify='center'
          align='start'
          style={{paddingLeft: '15px'}}
        >
          <Label {...this.props} />
        </Box>
      </Grid>
    );
  }
}

PostAvatar.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isMe: PropTypes.bool.isRequired,
  username: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.any
}

export default PostAvatar;

