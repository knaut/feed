// IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux'

// STYLES
import css from '@emotion/css'

// COMPONENTS
import { Grommet, Box, Button, Grid, TextArea, Heading, Text, Image } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Add, Star, Note, SubtractCircle, Gremlin, Help, User, Language } from 'grommet-icons';
import { FadeLoader, BarLoader, HashLoader, BounceLoader } from 'react-spinners';

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
    index: 0
  };

  componentDidMount() {
    const { isLoading } = this.props;

    if (isLoading === true) {
      this.interval = setInterval(() => {
        
        this.setState({
          index: Math.floor( Math.random() * Math.floor(this.quotes.length) )
        });

      }, 3145);
    } else {

      clearInterval(this.interval);

    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { isLoading } = this.props;
    const { index } = this.state;

    return (
      <Box
        animation={ this.props.isLoading ? ['slideDown', 'fadeIn'] : ['zoomOut', 'fadeOut'] }
        justify="center"
        align="center"
        css={css`position: relative;`}
      >
        <Language 
          color='purple'
          size='xlarge'
          css={css`
            position: absolute;
            top: 10px;
          `}
        />
        <HashLoader
          color='#D3BBE8' // theme doesn't pass down :(
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
    );
  }
}

export default GlobalLoader;

