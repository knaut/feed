// IMPORTS
import React, { Component } from 'react';

// COMPONENTS
import { Box, Button } from 'grommet';
import PieChart from 'react-minimal-pie-chart';
import { Add } from 'grommet-icons';

// STYLES
import css from '@emotion/css'

// THEME
import { feed } from '../../Theme'

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
        <Box css={css`width: 45px;`}>
          <PieChart
            data={[{ value: 1, key: 1, color: (
              warn ? ( 
                block ? feed.global.colors.red : feed.global.colors.orange
              ) : feed.global.colors.gray2
            )}]}
            reveal={ ( count >= limit ) ? 100 : reveal }
            lineWidth={10}
            animate
            css={css`
              position: relative;
              z-index: 22;
              opacity: ${opacity};
            `}
          />
          <Box css={css`position: absolute;`}>
            <PieChart
              data={[{ value: 1, key: 1, color: feed.global.colors.light }]}
              reveal={100}
              lineWidth={10}
              css={css`
                position: relative;
                z-index: 21;
                opacity: 1;
              `}
            />
            <Add 
              color={block ? feed.global.colors.red : feed.global.colors.gray3}
              css={css`
                position: absolute;
                z-index: 28;
                left: 23.5%;
                top: 23.5%;
                transform: ${block ? 'rotateZ(45deg)' : 'none'};
                transition: 0.2s all ease-in-out;
              `}
            />
          </Box>
        </Box>
      </Button>
    );
  }
}

export default Counter;