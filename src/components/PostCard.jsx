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
import { Add, Star, Note, SubtractCircle } from 'grommet-icons';

// THUNKS
import * as PostThunks from '../thunks/post';

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      delete: PostThunks.deletePost
    }, dispatch)
  }
}

class PostCard extends Component {
  state = {
    onHover: false,
    starHover: false,
    noteHover: false,
    minusHover: false
  }

  onEnter = () => {
    this.setState({ onHover: true });
  }

  onLeave = () => {
    this.setState({ onHover: false });
  }

  onMinusEnter = () => {
    this.setState({
      onHover: true,
      minusHover: true
    });
  }

  onMinusLeave = () => {
    this.setState({
      onHover: false,
      minusHover: false
    });
  }

  onNoteEnter = () => {
    this.setState({
      noteHover: true
    });
  }

  onNoteLeave = () => {
    this.setState({
      noteHover: false
    });
  }

  onStarEnter = () => {
    this.setState({
      starHover: true
    });
  }

  onStarLeave = () => {
    this.setState({
      starHover: false
    });
  }

  onDelete = () => {
    const id = this.props.post.id;
    this.props.actions.delete({
      id
    });
  }

  render() {
    return (
      <Box align="center" margin={{top: 'medium', bottom: 'small'}} style={{ width: '100%', maxWidth: '800px' }} animation={['fadeIn']}>
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
          onMouseEnter={this.onEnter}
          onMouseLeave={this.onLeave}
        >
          <Box style={{ textAlign: 'right' }}>
            <span style={{
              ...styles.typography.card_date,
              color: styles.colors.neutrals.gray2
            }}>{ Moment(this.props.post.timestamp).format('llll') }</span>
          </Box>
          <div>{this.props.post.text}</div>
        </Box>
        <Grid
          fill
          areas={[
            { name: 'left', start: [0, 0], end: [0, 0] },
            { name: 'main', start: [1, 0], end: [1, 0] },
            { name: 'right', start: [2, 0], end: [2, 0] }
          ]}
          columns={['xsmall', 'flex', 'xsmall']}
          rows={['flex']}
          gap='small'
        >
          <Box gridArea='left' pad='medium'
            animation={this.state.starHover === true ? 'pulse' : {}}
            onMouseEnter={this.onStarEnter}
            onMouseLeave={this.onStarLeave}
            style={{cursor: 'pointer'}}
          >
            <Star size='medium' 
              color={this.state.starHover === true ? styles.colors.primaries.orange : styles.colors.neutrals.gray2} 
              style={{ transition: 'all 0.2s ease-in-out' }}
            />
          </Box>
          <Box gridArea='main' pad='medium'
            onMouseEnter={this.onNoteEnter}
            onMouseLeave={this.onNoteLeave}
            style={{cursor: 'pointer'}}
          >
            <Note size='medium' color={styles.colors.neutrals.gray2} 
              color={this.state.noteHover === true ? styles.colors.primaries.cyan : styles.colors.neutrals.gray2} 
              style={{ transition: 'all 0.2s ease-in-out' }}
            />
          </Box>
          <Box gridArea='right' align='end' pad='medium'
            onMouseEnter={this.onMinusEnter}
            onMouseLeave={this.onMinusLeave}
            onClick={this.onDelete}
            style={{cursor: 'pointer'}}
          >
            <SubtractCircle
              size='medium' 
              color={this.state.minusHover ? styles.colors.primaries.red : styles.colors.neutrals.gray2}
              style={{
                position: 'relative',
                top: this.state.onHover === true ? 0 : '-50px',
                transition: 'all 0.2s ease-in-out'
              }}
            />
          </Box>
        </Grid>
      </Box>
    );
  }
};

export default connect(() => new Object(), mapDispatchToProps)(PostCard);