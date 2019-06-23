// IMPORTS
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// STYLES
import css from '@emotion/css'

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

    console.log(this)

    return (
      <Box 
        align="center" 
        css={css`width: 100%; max-width: 800px`} 
        margin={{ bottom: 'small' }}
        animation={['fadeIn', 'zoomIn']}
        onMouseEnter={this.onEnter}
        onMouseLeave={this.onLeave}
      >
        <Box
          pad='medium'
          gap='small'
          round
          background='white'
          css={css`
            width: 100%;
            z-index: 1;
          `}
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