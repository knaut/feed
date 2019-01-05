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

function mapStateToProps(state) {
  return state;
}

class FeedList extends Component {
  render() {
    return (
      <Box align="center">
        {
          this.props.feed.posts.length > 0 ?
            // post card component
            <i>posts exist, go here</i>
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