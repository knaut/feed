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
import Loader from './Loader'

// THEME
import { feed } from '../../Theme'

const mapStateToProps = (state) => {
  return state.loader
}

class GlobalLoader extends Component {
  
  render() {
    const { isLoading } = this.props;

    return (
      <Box
        fill
        background='purpleDark'
        css={css`
          position: absolute;
          z-index: ${ isLoading ? 105 : -1 };
        `}
      >
        <Loader isLoading={isLoading} />
      </Box>
    );
  }
}

export default connect(mapStateToProps, {})(GlobalLoader);

