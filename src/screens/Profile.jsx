// IMPORTS
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// GROMMET
import { Grommet, Box, Button, Grid } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Login } from "grommet-icons";

// STYLES
import styles from '../styles';

// COMPONENTS
import GlobalLoader from '../components/GlobalLoader.jsx';
import MyProfileButton from '../components/MyProfileButton.jsx';
import MyFeedButton from '../components/MyFeedButton.jsx';
import ProfileCard from '../components/ProfileCard.jsx';

function mapStateToProps(state) {
  const {
    isLoaded
  } = state.cache;

  return {
    isLoaded
  }
}

class Profile extends Component {
  renderProfile() {
    return (
      <div 
        style={{
          background: styles.colors.darks.purple,
          ...styles.app.container,
          alignItems: 'center',
          textAlign:'center',
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
          gap='small'
        >
          <Box gridArea='left'>              
          </Box>
          <Box gridArea='main'>
            <ProfileCard username={this.props.match.params.username} />
          </Box>
          <Box gridArea='right'>
            <MyFeedButton/>
          </Box>
        </Grid>
      </div>
    );
  }
  render() {
    return (
      <Grommet theme={grommet}>
        { this.props.isLoaded ? this.renderProfile() : <GlobalLoader isLoading={true}/>}
      </Grommet>
    );
  }
}

export default connect(mapStateToProps)(Profile);
