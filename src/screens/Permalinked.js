// IMPORTS
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


// COMPONENTS
import { Grommet, Box, Button, Grid, TextArea } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Login } from "grommet-icons";

import Layout from '../Layout';
import GlobalLoaderProvider from '../components/GlobalLoaderProvider';
import PermalinkProvider from '../components/post/PermalinkProvider'
import Card from '../components/post/Card';
import WrappedAddPost from '../components/button/WrappedAddPost'
import MyProfile from '../components/button/MyProfile'
import Search from '../components/button/Search'
import MyFeed from '../components/button/MyFeed'

class Permalinked extends Component {
  render() {
    const postId = this.props.match.params.id

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
          <Box align='center' margin={{top: 'medium'}}>
            <PermalinkProvider postId={postId}>
              <Card />
            </PermalinkProvider>
          </Box>
        </GlobalLoaderProvider>
      </Layout>
    );
  }
}

export default Permalinked