// IMPORTS
import React, { Component } from 'react';

// COMPONENTS
import { Grommet, Box, Button, Grid } from 'grommet';

// STYLES
import css from '@emotion/css'

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
        css={css`cursor: pointer;`}
      >
        <SubtractCircle
          size='medium' 
          color={onHover ? 'red' : 'gray2'}
          css={css`
            transition: all 0.2s ease-in-out;
          `}
        />
      </Box>
    )
  }
}

export default Remove