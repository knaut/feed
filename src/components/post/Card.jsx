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
import CardHeader from './CardHeader.jsx';
import CardText from './CardText.jsx';

export default class Card extends Component {
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
        pad='medium'
        gap='small'
        round
        style={{
          background: 'white',
          width: '100%',
          cursor: 'pointer',
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
    );
  }
}