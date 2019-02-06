// IMPORTS
import React, { Component } from 'react';

// COMPONENTS
import { Box } from 'grommet';
import PieChart from 'react-minimal-pie-chart';

// STYLES
import styles from '../../styles';

class Counter extends Component {
  render() {
    const { count, limit } = this.props;
    console.log({count,limit});


    const reveal = (count / limit) * 100;
    const opacity = (count / limit);
    const warn = reveal > 92;
    const block = reveal > limit;
    
    return (
      <Box style={{
        position: 'absolute',
        right: '-5px',
        bottom: '-5px',
        width: '45px'
      }}>
        <PieChart
          data={[{ value: 1, key: 1, color: warn ? styles.colors.primaries.orange : styles.colors.neutrals.gray2 }]}
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
        </Box>
      </Box>
    );
  }
}

export default Counter;