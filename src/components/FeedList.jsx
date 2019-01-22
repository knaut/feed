// IMPORTS
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// STYLES
import styles from '../styles';

// COMPONENTS
import { Grommet, Box, Button, Grid, TextArea } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Add } from 'grommet-icons';

import PostCard from './PostCard.jsx';

function mapStateToProps(state) {

  const isLoaded = state.user.username && state.cache.isLoaded;
  const statuses = [];
  let hasStatuses = false;

  if (isLoaded) {
    const id = state.user.username.split('.')[0];
    const profile = state.Profile.entities[id];
    hasStatuses = profile.Status.length > 0;

    if (hasStatuses) {

      for (let s = 0; profile.Status.length > s; ++s) {
        const status = profile.Status[s];
        statuses.push( status );
      }

    }

  }

  return {
    isLoaded,
    statuses,
    hasStatuses
  }
  
}

class FeedList extends Component {
  renderCards = () => {

    if (this.props.isLoaded) {

      if (this.props.hasStatuses === false) {
    
        return (
          <h3 style={{
            color: styles.colors.pastels.purple,
            fontWeight: 300,
            letterSpacing: '1px'
          }}>…no posts to show.</h3>
        );

      } else {

        const { statuses } = this.props;
        const cards = [];
        for (let i = 0; statuses.length > i; ++i) {
          cards.push(
            <PostCard 
              post={ statuses[ i ] }
              key={ i }
            />
          );
        }

      }

    } else {
      return (
        <h3 style={{
          color: styles.colors.pastels.purple,
          fontWeight: 300,
          letterSpacing: '1px'
        }}>…loading.</h3>
      );
    }

  }

  render() {
    return (
      <Box align="center" style={{ width: '100%' }} pad='medium'>
        {this.renderCards()}
      </Box>
    );
  }
};

export default connect(mapStateToProps)(FeedList);