// IMPORTS
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Moment from 'moment';

// STYLES
import styles from '../styles';

// COMPONENTS
import { Grommet, Box, Button, Grid, TextArea } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Add, Star, Note } from 'grommet-icons';

class PostCard extends Component {
  render() {
    return (
      <Box align="center" pad="medium" style={{ width: '100%' }}>
        <Box
          pad='medium'
          gap='small'
          round
          style={{
            background: 'white',
            width: '100%',
            maxWidth: '800px'
          }}
        >
          <Box style={{ textAlign: 'right' }}>
            <span style={{
              ...styles.typography.card_date,
              color: styles.colors.neutrals.gray2
            }}>{ Moment(this.props.post.timestamp).format('llll') }</span>
          </Box>
          <div>{this.props.post.text}</div>
        </Box>
        <Box align='start' direction='row' style={{
          width: '100%'
        }}>
          <Box pad='medium'>
            <Star size='medium' color={styles.colors.primaries.orange} />
          </Box>
          <Box pad='medium'>
            <Note size='medium' color={styles.colors.neutrals.gray2} />
          </Box>
        </Box>
      </Box>
    );
  }
};

export default PostCard;