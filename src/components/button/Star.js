// IMPORTS
import React, { Component } from 'react';

// COMPONENTS
import { Grommet, Box, Button, Grid } from 'grommet';

// STYLES
import css from '@emotion/css'
import styles from '../../../src/styles';

// ICONS
import { Star } from 'grommet-icons';

class Star extends Component {
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
      <Box gridArea='star' align='end' pad='small'
        onMouseEnter={this.onEnter}
        onMouseLeave={this.onLeave}
        onClick={this.onDelete}
        style={{cursor: 'pointer'}}
      >
        <Star
          size='medium' 
          color={onHover ? styles.colors.primaries.orange : styles.colors.neutrals.gray2}
          css={css`
            transition: all 0.2s ease-in-out;
          `}
        />
      </Box>
    )
  }
}

export default Star