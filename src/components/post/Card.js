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
import Toolbar from './Toolbar'

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