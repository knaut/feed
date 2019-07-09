// IMPORTS
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

// STYLES
import css from '@emotion/css'

// COMPONENTS
import {
  Box,
  Text,
} from 'grommet';
import { Language } from 'grommet-icons';
import { HashLoader } from 'react-spinners';

// THEME
import { feed } from '../../Theme'

const mapStateToProps = (state) => {
  return state.loader
}

class GlobalLoader extends Component {
  quotes = [
    'fetching from Gaia',
    'counting kittens',
    'stacking blocks',
    'fitting odd-shaped pegs',
    'spinning unturned cogs',
    'unfolding packets',
    'chaining stacks'
  ];

  state = {
    index: 0,
    isDone: false
  }

  ms = 3145

  componentDidMount() {
    const { isLoading } = this.props;

    if (isLoading === true) {
      this.interval = setInterval(() => {
        
        this.setState({
          index: Math.floor( Math.random() * Math.floor(this.quotes.length) )
        });

      }, this.ms);

    } else {
      clearInterval(this.interval);

      // setTimeout for ms
      setTimeout(() => {
        this.setState({
          isDone: true
        })
      }, this.ms)
    }

  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { isLoading } = this.props;
    const { index, isDone } = this.state;

    return (
      <Box
        fill
        background='purpleDark'
        align='center'
        justify='center'
        animation={ this.props.isLoading ? ['slideDown', 'fadeIn'] : ['zoomOut', 'fadeOut'] }
        css={css`
          position: absolute;
          z-index: ${ isDone ? -1 : 105 };
        `}
      >
        <Box
          justify="center"
          align="center"
          css={css`position: relative;`}
        >
          <Language 
            color={feed.global.colors.purple}
            size='xlarge'
            css={css`
              position: absolute;
              top: 10px;
            `}
          />
          <HashLoader
            color={feed.global.colors.purplePastel}
            loading={true}
            size={115}
            css={css`
              position: absolute;
              top: 0;
            `}
          />
          <Text 
            margin='small' 
            color='gray1'
            size='xlarge'
          >…{isLoading ? this.quotes[ index ] : 'polishing edges'}…</Text>
        </Box>
      </Box>
    );
  }
}

export default GlobalLoader;

