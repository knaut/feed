// IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// STYLES
import css from '@emotion/css'

// COMPONENTS
import { Grommet, Box, Button, Grid } from 'grommet';
import CardHeader from './CardHeader';
import CardText from './CardText';
import Permalink from '../button/Permalink'
import Remove from '../button/Remove'

// ACTIONS
import * as PostThunks from '../../thunks/post'

class Toolbar extends Component {
  render() {
    const {
      onHover,
      post,
      author,
      username,
      isPermalinked
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
        {/*
        <Permalink link={`/permalink/${post.id}`} />
        */}
        <Box gridArea='flex'>

        </Box>
        { 
          author === username ? (
            isPermalinked !== true ? <Remove id={post.id}/> : null
          ) : null }
      </Grid>
    )
  }
}

export default Toolbar