// IMPORTS
import React, { Component } from 'react';
import Moment from 'moment';

// STYLES
import css from '@emotion/css'

// COMPONENTS
import { Grommet, Box, Button, Grid } from 'grommet';
import CardHeader from './CardHeader';
import CardText from './CardText';
import Permalink from '../button/Permalink'
import Remove from '../button/Remove'


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

export default Toolbar