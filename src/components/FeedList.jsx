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
  return state;
}

class FeedList extends Component {
  renderCards(posts) {
    const cards = [];
    for (let i = 0; posts.length > i; ++i) {
      cards.push(
        <PostCard 
          post={ posts[i] }
          key={ i }
        />
      );
    }
    return cards;
  }

  render() {
    return (
      <Box align="center" style={{ width: '100%' }}>
        {
          this.props.feed.posts.length > 0 ?
            // post card component
            (
              this.renderCards(this.props.feed.posts)
            )
          :
            (
              <h3 style={{
                color: styles.colors.pastels.purple,
                fontWeight: 300,
                letterSpacing: '1px'
              }}>…no posts to show.</h3>
            )
        }
      </Box>
    );
  }
};

export default connect(mapStateToProps)(FeedList);