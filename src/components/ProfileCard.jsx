// IMPORTS
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Moment from 'moment';
import * as blockstack from 'blockstack';

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

// function mapStateToProps(state) {
//   const profile = new blockstack.lookupProfile(state.user.username);

//   console.log({profile});

//   return {};
// }

class ProfileCard extends Component {
  componentDidMount() {
    console.log(this);
    // load a blockstack profile based on our route
    const profile = new blockstack.lookupProfile(`${this.props.username}.id.blockstack`);

    console.log({profile});
  }

  render() {
    return (
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
          <header>
            This is a profile
          </header>
        </Box>
      </Box>
    );
  }
}

export default ProfileCard;