// IMPORTS
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// COMPONENTS
import {
  Box,
  Button,
  FormField,
  TextInput,
  Heading
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

function mapStateToProps(state, ownProps) {
  const matches = state.search.matches
  const isFetching = state.search.isFetching

  return {
    matches,
    isFetching
  }
}

const NoProfiles = () => (
  <Box
    align='center'
    justify='center'
  >
    <Heading level={4} color='purplePastel'>…no profiles to show…</Heading>
  </Box>
)

const SearchScreen = ({ matches, isFetching }) => (
  <Layout
    left={
      null
    }
    right={<UserToolbar/>}
  >
    <Box pad={{bottom: 'large'}}>
      <SearchInput/>
    </Box>
    { 
      isFetching === true ? (
        <GlobalLoader isLoading={true}/>
      ) : (
        Object.keys(matches).length ? <ProfileList/> : (
          <NoProfiles/>
        )
      )
    }
  </Layout>
)


export default connect(mapStateToProps, () => new Object() )(SearchScreen)