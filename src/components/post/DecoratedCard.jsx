// IMPORTS
import React, { Component } from 'react';

// STYLES
import styles from '../../../src/styles';

// COMPONENTS
import { Grommet, Box, Button, Grid } from 'grommet';
import Card from './Card.jsx';
import { Add, Star, Note, SubtractCircle } from 'grommet-icons';

/*  v2 features
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
*/

class Decorated extends Component {
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
      <Box 
        align="center" 
        style={{ width: '100%', maxWidth: '800px' }} 
        animation={['fadeIn', 'zoomIn']}
      >
        <Box 
          style={{ width: '100%', maxWidth: '800px' }} 
          onMouseEnter={this.onEnter}
          onMouseLeave={this.onLeave}
        >
          <Card {...this.props}/>
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
}

export default Decorated;