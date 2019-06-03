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
import GlobalLoader from '../components/GlobalLoader';
import MyProfileButton from '../components/MyProfileButton';
import MyFeedButton from '../components/MyFeedButton';
import ProfileCard from '../components/ProfileCard';
import Layout from '../Layout'

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
      <Layout>
        <ProfileCard username={this.props.match.params.username} />
      </Layout>
    );
  }
  render() {
    return (
      <React.Fragment>
        { this.props.isLoaded ? this.renderProfile() : <GlobalLoader isLoading={true}/>}
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(Profile);
