// IMPORTS
import React, { Component } from 'react';
import { Grommet, Box, Button, Grid } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Login } from "grommet-icons";

// STYLES
import styles from '../styles';

// COMPONENTS
import AddPostButton from '../components/AddPostButton.jsx';
import MyProfileButton from '../components/MyProfileButton.jsx';
import ProfileCard from '../components/ProfileCard.jsx';

class Profile extends Component {
  render() {
    console.log(this)
    return (
      <Grommet theme={grommet}>
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
              <AddPostButton/>
            </Box>
            <Box gridArea='main'>
              <ProfileCard username={this.props.match.params.username} />
            </Box>
            <Box gridArea='right'>
              <MyProfileButton/>
            </Box>
          </Grid>
        </div>
      </Grommet>
    );
  }
}

export default Profile;
