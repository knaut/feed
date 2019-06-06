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
import GlobalLoaderProvider from '../components/GlobalLoaderProvider';
import ProfileCard from '../components/ProfileCard';
import Layout from '../Layout'

import WrappedAddPost from '../components/button/WrappedAddPost'
import MyProfile from '../components/button/MyProfile'
import Search from '../components/button/Search'
import MyFeed from '../components/button/MyFeed'

class Profile extends Component {
  render() {
    return (
      <Layout
        left={null}
        right={
          <React.Fragment>
            <MyFeed/>
            <MyProfile/>
            <Search/>
          </React.Fragment>
        }
      >
        <GlobalLoaderProvider>
          <ProfileCard username={this.props.match.params.username} />
        </GlobalLoaderProvider>
      </Layout>
    );
  }
}

export default Profile;
