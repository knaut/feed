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
    console.log(this.props)
    const {
      onHover
    } = this.state
    
    const {
      post,
      author,
      user
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
            username={username}
            image={image}
            name={name}
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
          user={user.username}
          author={author.username}
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