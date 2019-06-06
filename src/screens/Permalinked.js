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

import Layout from '..//Layout';
import GlobalLoaderProvider from '../components/GlobalLoaderProvider';
import PermalinkProvider from '../components/post/PermalinkProvider'
import Card from '../components/post/Card';

class Permalinked extends Component {
  render() {
    const id = this.props.match.params.id

    return (
      <Layout>
        <GlobalLoaderProvider>
          <PermalinkProvider id={id}>
            <Card />
          </PermalinkProvider>
        </GlobalLoaderProvider>
      </Layout>
    );
  }
}

export default Permalinked