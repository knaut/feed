// IMPORTS
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Moment from 'moment';

// COMPONENTS
import { Grommet, Box, Button, Grid, TextArea } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Add, Star, Note, SubtractCircle } from 'grommet-icons';


// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators({
//       delete: PostThunks.deletePost
//     }, dispatch)
//   }
// }

class ProfileCard extends Component {
  render() {
    console.log(this);
    return (
      <Box pad={{ horizontal: 'xlarge', vertical: 'large' }}>
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
          <header>
          </header>
        </Box>
      </Box>
    );
  }
}

export default ProfileCard;