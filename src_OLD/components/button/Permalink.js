// IMPORTS
import React, { Component } from 'react';

// COMPONENTS
import { Grommet, Box, Button, Grid } from 'grommet';
import { Link } from 'grommet-icons';
import * as Router from 'react-router-dom';

// STYLES
import css from '@emotion/css'

class Permalink extends Component {
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
      link
    } = this.props;

    const {
      onHover
    } = this.state

    return (
      <Router.Link to={link}>
        <Box gridArea='permalink' align='start' pad='small'
          onMouseEnter={this.onEnter}
          onMouseLeave={this.onLeave}
          css={css`cursor: pointer;`}
        >
          <Link
            size='medium' 
            color={onHover ? 'yellow' : 'gray2'}
            css={css`
              transition: all 0.2s ease-in-out;
            `}
          />
        </Box>
      </Router.Link>
    );
  }
}

export default Permalink