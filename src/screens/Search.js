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
// GLOBALS
import Layout from '../Layout'
import GlobalLoader from '../components/GlobalLoader'
// RIGHT BUTTONS
import MyProfile from '../components/button/MyProfile'
import Search from '../components/button/Search'
import MyFeed from '../components/button/MyFeed'
// MAIN
import SearchInput from '../components/search/SearchInput'
import ProfileList from '../components/profile/List'

import UserToolbar from '../components/UserToolbar'

const SearchScreen = () => (
  <Layout
    left={
      null
    }
    right={<UserToolbar/>}
  >
    <Box pad={{bottom: 'large'}}>
      <SearchInput/>
    </Box>
    <ProfileList/>
  </Layout>
)


export default SearchScreen