// IMPORTS
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// COMPONENTS
import {
  Box,
  Button,
  FormField,
  TextInput
} from 'grommet';
import { Search as SearchIcon } from 'grommet-icons';

import Layout from '../Layout'
import PostList from '../components/post/List'
import PostListProvider from '../components/post/PostListProvider'
import WrappedSlate from '../components/slate/WrappedSlate'

import GlobalLoaderProvider from '../components/GlobalLoaderProvider'

import WrappedAddPost from '../components/button/WrappedAddPost'
import MyProfile from '../components/button/MyProfile'
import Search from '../components/button/Search'
import MyFeed from '../components/button/MyFeed'

import SearchInput from '../components/search'

// STYLES
import styles from '../styles'
import css from '@emotion/css'

function mapStateToProps (state) {
  const username = state.user.username

  return {
    username
  }
}

class SearchScreen extends Component {
  render() {
    return (
      <Layout
        left={
          null
        }
        right={
          <React.Fragment>
            <MyFeed/>
            <MyProfile/>
            <Search/>
          </React.Fragment>
        }
      >
        <GlobalLoaderProvider>
          <SearchInput/>
        </GlobalLoaderProvider>
      </Layout>
    )
  }
}

export default connect(mapStateToProps, () => new Object() )(SearchScreen)