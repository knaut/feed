// IMPORTS
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// STYLES
import styles from '../styles';

// COMPONENTS
import { Grommet, Box, Button, Grid, TextArea } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Login } from "grommet-icons";

import GlobalLoader from '../components/GlobalLoader.jsx';
import WrappedDecoratedCard from '../components/post/WrappedDecoratedCard.jsx';

function mapStateToProps(state) {

  return {
    cached: state
  };
}

class Permalinked extends Component {
  render() {
    console.log(this);

    const { isLoaded } = this.props.cached.cache;

    if (isLoaded === true) {
      // get the post that matches this permalink
      const { id } = this.props.match.params;

      const hasIndex = this.props.cached.Status.ids.indexOf(id) > -1;
      

      return (
        <Grommet theme={grommet}>
          <div 
            style={{
              background: styles.colors.darks.purple,
              ...styles.app.container,
              justifyContent: 'start'
            }}
          >
            <Grid
              fill
              areas={[
                { name: 'left', start: [0, 0], end: [0, 0] },
                { name: 'main', start: [1, 0], end: [1, 0] },
                { name: 'right', start: [2, 0], end: [2, 0] }
              ]}
              columns={['xsmall', 'flex', 'xsmall']}
              rows={['flex']}
              gap='large'
            >
              <Box gridArea='left'>
              </Box>
              <Box gridArea='main'>
                This is card
              </Box>
              <Box gridArea='right'>
              </Box>
            </Grid>
          </div>
        </Grommet>
      );

    } else {

      return (
        <Grommet theme={grommet}>
          <GlobalLoader
            isLoading={true}
          />
        </Grommet>
      );

    }
  }
}

export default connect(mapStateToProps)(Permalinked);