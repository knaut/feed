// IMPORTS
import React, { Component } from 'react';
import Moment from 'moment';
import { LoremIpsum } from 'lorem-ipsum';

// STYLES
import styles from '../../../src/styles';
/** @jsx jsx */ import { jsx, Global } from '@emotion/core'
import css from '@emotion/css'
import styled from '@emotion/styled'

// COMPONENTS
import { Grommet, Box } from 'grommet';

class Posts extends Component {
  render() {
    return (
      <Box align="center" style={{ width: '100%' }} pad='medium'>
        this is a list of post cards
      </Box>
    );
  }
}

export default Posts;