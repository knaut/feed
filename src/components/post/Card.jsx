// IMPORTS
import React, { Component } from 'react';
import Moment from 'moment';

// STYLES
import styles from '../../../src/styles';

// COMPONENTS
import { Grommet, Box, Button, Grid } from 'grommet';
import Avatar from '../profile/Avatar.jsx';

class Header extends Component {
  componentDidMount() {
    const { permalink } = this.props;

    if (permalink === true) {
      // load the profile
    }
    // no other use cases, display as normal
  }

  render() {
    const { permalink, post } = this.props;
    if (permalink === true) {
      return (
        <Box style={{ textAlign: 'right' }}>
          <Avatar
            isLoading={false}
            isOnBlockstack={true}
            isMe={false}
            username={post.Profile}
            image={null}
            mini={true}
          />
          <span style={{
            ...styles.typography.card_date,
            color: styles.colors.neutrals.gray2
          }}>{ Moment(post.timestamp).format('llll') }</span>
        </Box>
      );
    } else {
      return (
        <Box style={{ textAlign: 'right' }}>
          <span style={{
            ...styles.typography.card_date,
            color: styles.colors.neutrals.gray2
          }}>{ Moment(post.timestamp).format('llll') }</span>
        </Box>
      );
    }
  } 
}

class Card extends Component {
  render() {

    const {
      post,
      permalink
    } = this.props;

    return (
      <Box
        pad='medium'
        gap='small'
        round
        style={{
          background: 'white',
          width: '100%',
          cursor: 'pointer',
          zIndex: 1
        }}
      >
        <Header {...this.props}/>
        <div style={{
          whitespace: 'pre-wrap',
          overflowWrap: 'break-word'
        }}>{this.props.post.text}</div>
      </Box>
    );
  }
}

export default Card;