// IMPORTS
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

// STYLES
import styles from '../../../src/styles';
/** @jsx jsx */ import { jsx, Global } from '@emotion/core'
import css from '@emotion/css'
import styled from '@emotion/styled'

// COMPONENTS
import { Grommet, Box, Button, Grid } from 'grommet';
import CardHeader from './CardHeader';
import CardText from './CardText';
import Permalink from '../button/Permalink'

// ICONS
import { SubtractCircle } from 'grommet-icons';

class Remove extends Component {
  state = {
    onHover: false
  }

  onEnter = () => {
    this.setState({
      onHover: true
    });
  }

  onLeave = () => {
    this.setState({
      onHover: false
    });
  }

  render() {
    const {
      onHover
    } = this.state

    return (
      <Box gridArea='delete' align='end' pad='small'
        onMouseEnter={this.onEnter}
        onMouseLeave={this.onLeave}
        onClick={this.onDelete}
        style={{cursor: 'pointer'}}
      >
        <SubtractCircle
          size='medium' 
          color={onHover ? styles.colors.primaries.red : styles.colors.neutrals.gray2}
        />
      </Box>
    )
  }
}

class Toolbar extends Component {
  render() {
    const {
      onHover,
      post
    } = this.props

    return (
      <Grid
        fill
        areas={[
          { name: 'permalink', start: [0, 0], end: [0, 0] },
          { name: 'flex', start: [1, 0], end: [1, 0] },
          { name: 'delete', start: [2, 0], end: [2, 0] }
        ]}
        columns={['xsmall', 'flex', 'xsmall']}
        rows={['flex']}
        gap='small'
        style={{
          position: 'relative',
          top: onHover === true ? 0 : '-50px',
          transition: 'all 0.2s ease-in-out'
        }}
      >
        <Permalink link={`/permalink/${post.id}`} />
        <Box gridArea='flex'>

        </Box>
        <Remove/>
      </Grid>
    )
  }
}

Toolbar.propTypes = {
  post: PropTypes.object,
  onHover: PropTypes.function
}

class Card extends Component {
  state = {
    onHover: false,
  }

  onEnter = () => {
    this.setState({ onHover: true });
  }

  onLeave = () => {
    this.setState({ onHover: false });
  }

  render() {
    const {
      post,
      author
    } = this.props;

    const {
      username,
      name,
      image
    } = author;

    const {
      timestamp,
      text
    } = post;

    return (
      <Box 
        align="center" 
        style={{ width: '100%', maxWidth: '800px' }} 
        margin={{ bottom: 'small' }}
        animation={['fadeIn', 'zoomIn']}
        onMouseEnter={this.onEnter}
        onMouseLeave={this.onLeave}
      >
        <Box
          pad='medium'
          gap='small'
          round
          style={{
            background: 'white',
            width: '100%',
            zIndex: 1
          }}
        >
          <CardHeader 
            username={username}
            image={image}
            name={name}
            timestamp={timestamp}
          />
          <CardText text={text} />
        </Box>
        <Toolbar 
          post={post} 
          {...this.state} 
        />
      </Box>
    );
  }
}

Card.propTypes = {
  author: PropTypes.object,
  post: PropTypes.object
}

export default Card