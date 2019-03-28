// IMPORTS
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// STYLES
import styles from '../../styles';
/** @jsx jsx */ import { jsx, Global } from '@emotion/core'
import css from '@emotion/css'

// COMPONENTS
import { Grommet, Box, Button, Grid, TextArea, Heading, Text, Image } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Add, Star, Note, SubtractCircle, Gremlin, Help, User } from 'grommet-icons';
import { FadeLoader, BarLoader, HashLoader } from 'react-spinners';

const IconImage = (props) => {
  if (props.image) {
    return (
      <Image src={props.image} fit="cover" />
    );
  } else {
    return (
      <User color={styles.colors.pastels.purple} size='xlarge'/>
    );
  }
}

const IconLoading = () => {
  return (
    <Box justify="center" align="center">
      <Box background={styles.colors.primaries.purple} round={'full'} 
        justify="center" align="center"
        css={{
            border: `5px solid ${styles.colors.neutrals.gray1}`,
            width: '100px',
            height: '100px',
            overflow: 'hidden',
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
  );
}

const LabelLoading = (props) => {
  return (
    <Box justify="center" align="center" pad={'small'}>
      <Text level={1} size={'medium'} style={{
        color: styles.colors.neutrals.gray1
      }}>
        {`Looking up "${props.username}"…`}
      </Text>
    </Box>
  );
}

const IconLoaded = (props) => {
  const {
    image
  } = props;

  return (
    <Box justify="center" align="center">
      <Box background={styles.colors.primaries.purple} round={'full'} 
        justify="center" align="center" css={css`
          border: 5px solid ${styles.colors.neutrals.gray1};
          width: 100px;
          height: 100px;
          overflow: hidden;
        `}>
        <Box>
          <Box style={{
            width: '100%',
            height: '100%'
          }}>
            <IconImage image={props.image}/>
          </Box>
        </Box>
      </Box>
    </Box>
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
      return <IconLoaded image={image}/>
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
      return <LabelLoading username={username}/>;
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
  image: PropTypes.any.isRequired
}

export default PostAvatar;

