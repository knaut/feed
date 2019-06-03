// IMPORTS
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// COMPONENTS
import { Grommet, Box, Button, Grid, TextArea } from 'grommet';
import Layout from '../Layout'
import PostListProvider from '../components/post/PostListProvider'
import PostList from '../components/post/List'

// STYLES
import styles from '../styles'

function mapStateToProps(state) {
  return state
}

class UserFeed extends Component {
  render() {
    console.log(this)
    const user = this.props.match.params.username
    return (
      <Layout>
        <PostListProvider>
          <PostList/>
        </PostListProvider>
      </Layout>
    )
  }
}

export default connect(mapStateToProps, () => new Object() )(UserFeed)