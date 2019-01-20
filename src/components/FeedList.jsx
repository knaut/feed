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
  const id = state.user.username.split('.')[0];
  const feedIds = state.Profile.entities[id].Status;
  
  let feed = {};
  for (let f = 0; feedIds.length > f; ++f) {
    feed[ feedIds[f] ] = state.Status.entities[f];
  }

  return feedIds.length ? {entities: feed, ids: feedIds} : false;
}

class FeedList extends Component {
  renderCards = () => {
    if (this.props === false) {
      return (
        <h3 style={{
          color: styles.colors.pastels.purple,
          fontWeight: 300,
          letterSpacing: '1px'
        }}>…no posts to show.</h3>
      );
    } else {

      const { entities, ids } = this.props;
      const cards = [];
      for (let i = 0; ids.length > i; ++i) {
        cards.push(
          <PostCard 
            post={ entities[ ids[i] ] }
            key={ ids[i] }
          />
        );
      }
      return cards;

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