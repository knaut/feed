// IMPORTS
import React, { Component } from 'react';

// COMPONENTS
import { Box, Button } from 'grommet';
import PieChart from 'react-minimal-pie-chart';
import { Add } from 'grommet-icons';

// STYLES
import styles from '../../styles';

class Counter extends Component {
  onClick = () => {
    const { count, limit } = this.props;
    const block = count >= limit;

    if (block) {
      console.error('User tried to submit a status over the limit.');
    } else {
      this.props.handler();
    }
  }

  render() {
    const count = this.props.count === undefined ? 0 : this.props.count;
    const { limit } = this.props;
    
    const reveal = (count / limit) * 100;
    const opacity = (count / limit);
    const warn = reveal > 92;
    const block = count >= limit;

    return (
      <Button onClick={this.onClick}>
        <Box style={{
          width: '45px'
        }}>
          <PieChart
            data={[{ value: 1, key: 1, color: (
              warn ? ( 
                block ? styles.colors.primaries.red : styles.colors.primaries.orange 
              ) : styles.colors.neutrals.gray2
            )}]}
            reveal={ ( count >= limit ) ? 100 : reveal }
            lineWidth={10}
            animate
            style={{
              position: 'relative',
              zIndex: 20,
              opacity
            }}
          />
          <Box style={{
            position: 'absolute'
          }}>
            <PieChart
              data={[{ value: 1, key: 1, color: styles.colors.neutrals.light }]}
              reveal={100}
              lineWidth={10}
              style={{
                position: 'relative',
                zIndex: 19,
                opacity: 1
              }}
            />
            <Add 
              color={block ? styles.colors.primaries.red : styles.colors.neutrals.gray3}
              style={{
                position: 'absolute',
                zIndex: 28,
                left: '23.5%',
                top: '23.5%',
                transform: block ? 'rotateZ(45deg)' : 'none',
                transition: '0.2s all ease-in-out'
              }}
            />
          </Box>
        </Box>
      </Button>
    );
  }
}

export default Counter;