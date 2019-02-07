// IMPORTS
import React, { Component } from 'react';
import Moment from 'moment';

// STYLES
import styles from '../../../src/styles';

// COMPONENTS
import { Grommet, Box, Button, Grid } from 'grommet';

class Card extends Component {
  render() {
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
        onMouseEnter={this.onEnter}
        onMouseLeave={this.onLeave}
      >
        <Box style={{ textAlign: 'right' }}>
          <span style={{
            ...styles.typography.card_date,
            color: styles.colors.neutrals.gray2
          }}>{ Moment(this.props.post.timestamp).format('llll') }</span>
        </Box>
        <div>{this.props.post.text}</div>
      </Box>
    );
  }
}

export default Card;