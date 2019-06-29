// IMPORTS
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// GROMMET
import { Grommet, Box, Button, Grid } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Login } from "grommet-icons";

// COMPONENTS
import Layout from '../Layout'
// PROFILE
import ProfileLoader from '../components/profile/Loader';
import ProfileCard from '../components/profile/Card';
// BUTTONS
import MyProfile from '../components/button/MyProfile'
import Search from '../components/button/Search'
import MyFeed from '../components/button/MyFeed'

import UserToolbar from '../components/UserToolbar'

class Profile extends Component {
  render() {
    return (
      <Layout
        left={null}
        right={<UserToolbar/>}
      >
        <Box pad={{top: 'medium'}} animation={['slideDown', 'fadeIn']}>
          <ProfileLoader username={this.props.match.params.username}>          
            <ProfileCard/>
          </ProfileLoader>
        </Box>
      </Layout>
    );
  }
}

export default Profile;
