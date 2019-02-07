// IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grommet, Box, Button, Grid, TextArea } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Login } from "grommet-icons";

// STYLES
import styles from '../styles';

// COMPONENTS
import Editor from '../components/Editor.jsx';
import Slate from '../components/slate/Slate.jsx';
// import PostEditor from '../components/editor/PostEditor.jsx';
import WrappedAddPost from '../components/button/WrappedAddPost.jsx';
import MyFeedButton from '../components/MyFeedButton.jsx';
import MyProfileButton from '../components/MyProfileButton.jsx';
import FeedList from '../components/FeedList.jsx';
import GlobalLoader from '../components/GlobalLoader.jsx';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators({
      
    // }, dispatch)
  }
}

class Feed extends Component {
  render() {
    // <Editor />
    const { isLoaded } = this.props.cache;
    const loaded = (
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
            <WrappedAddPost/>
          </Box>
          <Box gridArea='main'>
            <Slate />
            <FeedList />
          </Box>
          <Box gridArea='right'>
            <MyProfileButton/>
          </Box>
        </Grid>
      </div>
    );

    const loading = (
      <GlobalLoader
        isLoading={true}
      />
    );

    return (
      <Grommet theme={grommet}>
        { isLoaded === true ? loaded : loading }
      </Grommet>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
