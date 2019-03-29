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
          width: 70px;
          height: 70px;
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
      <IconImage image={props.image}/>
    </IconFrame>
  );
}

const LabelLoaded = (props) => {
  const {
    username
  } = props;

  return (
    <Box justify="center" align="center" pad={{top: 'small'}}>
      <Text level={1} size={ 'small' } style={{
        letterSpacing: 0,
        color: styles.colors.neutrals.gray1
      }}>
        {username}
      </Text>
    </Box>
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
      username
    } = this.props;

    if (isLoading === true) {
      return null;
    } else {
      return <LabelLoaded username={username}/>;
    }
  }
}

class PostAvatar extends Component {
  render() {
    console.log(this.props)

    const {
      isLoading,
      username,
      image
    } = this.props;

    return (
      <React.Fragment>
        <Icon {...this.props} />
        <Label {...this.props} />
      </React.Fragment>
    );
  }
}

PostAvatar.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isMe: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  image: PropTypes.any
}

export default PostAvatar;

