// IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grommet, Box, Button, Grid } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Login } from "grommet-icons";

// STYLES
import styles from '../styles';

// COMPONENTS
import AddPostButton from '../components/AddPostButton.jsx';
import MyProfileButton from '../components/MyProfileButton.jsx';

class Feed extends Component {
  render() {
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
            gap='small'
          >
            <Box gridArea='left'>
              <AddPostButton/>
            </Box>
            <Box gridArea='main'>

              <Box align="center" pad="medium">
                <Box
                  pad='medium'
                  gap='small'
                  round
                  style={{
                    background: 'white',
                    width: '100%',
                    maxWidth: '800px'
                  }}
                >
                  This is add post
                </Box>
              </Box>

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

/*
<div 
          style={{
            background: styles.colors.darks.purple,
            ...styles.app.container,
            justifyContent: 'start'
          }}
        >
          <Box
            tag='header'
            justify='between'
            align='start'
            direction='row'
          >
            <AddPostButton/>
            <Box align="center" pad="medium">
              <Box
                pad='large'
                gap='small'
                round
                style={{
                  background: 'white'
                }}
              >
                This is add post
              </Box>
            </Box>
            <MyProfileButton/>
          </Box>
        </div>
*/

export default Feed;
