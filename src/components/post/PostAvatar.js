// IMPORTS
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// STYLES
import css from '@emotion/css'

// COMPONENTS
import { Grommet, Box, Button, Grid, TextArea, Heading, Text, Image } from 'grommet';
import { Add, Star, Note, SubtractCircle, Gremlin, Help, User } from 'grommet-icons';
import { FadeLoader, BarLoader, HashLoader } from 'react-spinners';

const IconImage = (props) => {
  if (props.image) {
    return (
      <Image src={props.image} fit='cover' />
    );
  } else {
    return (
      <User color='purple' size='large'/>
    );
  }
}

const IconLoading = () => {
  return (
    <IconFrame>
      <HashLoader
        color='purple'
        loading={true}
        size={35}
      />
    </IconFrame>
  );
}


const LabelLoading = (props) => {
  return (
    <Box justify="center" align="center" pad={'small'}>
      <Text level={1} size='small' color='gray1'>
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
        background='purple'
        round='full'
        justify='center'
        align='center'
        css={css`
          border: 2px solid var(--gray1);
          width: 60px;
          height: 60px;
          overflow: hidden;
        `}>
        <Box>
          <Box fill>
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
    name,
    username,
    showUsername
  } = props;

  return (
    <React.Fragment>
      <Text level={1} size='medium' css={css`
        letter-spacing: 0;
        color: var(--dark);
      `}>
        {name}
      </Text>
      { showUsername ? <Text level={1} size='medium' color='dark-4'>{username}</Text> : null }
    </React.Fragment>
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
      username,
      showUsername
    } = this.props;

    if (isLoading === true) {
      return <LabelLoading username={username}/>;
    } else {
      return <LabelLoaded name={name} username={username} showUsername={showUsername}/>;
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

export default PostAvatar;

