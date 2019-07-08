// IMPORTS
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// STYLES
import css from '@emotion/css'

// COMPONENTS
import { Grommet, Box, Button, Grid } from 'grommet';
import CardHeader from './Header';
import CardText from './Text';
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
      onHover
    } = this.state
    
    const {
      post,
      author,
      username,
      isPermalinked
    } = this.props;

    const {
      timestamp,
      text
    } = post;

    return (
      <Box 
        align="center" 
        margin={{ bottom: 'small' }}
        animation={['fadeIn', 'zoomIn']}
        onMouseEnter={this.onEnter}
        onMouseLeave={this.onLeave}
        css={css`width: 100%;`}
      >
        <Box
          pad='medium'
          round
          background='white'
          width='100%'
          css={css`width: 100%; position: relative; z-index: 2;`}
        >
          <CardHeader 
            username={author.username}
            image={author.image}
            name={author.name}
            timestamp={timestamp}
            size='small'
          />
          <Box pad={{top: 'small'}}>
            <CardText text={text}/>
          </Box>
        </Box>
        <Toolbar 
          post={post} 
          onHover={onHover}
          username={username}
          author={author.username}
          isPermalinked={isPermalinked}
        />
      </Box>
    );
  }
}

export default Card