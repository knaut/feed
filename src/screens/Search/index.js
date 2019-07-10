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
} from 'grommet'

import { Search as SearchIcon } from 'grommet-icons'

import Layout from '../Layout'
import Theme from '../../Theme'
import GlobalLoader from '../../components/GlobalLoader'
import GlobalToolbar from '../../components/GlobalToolbar'

import SearchInput from './SearchInput'

function mapStateToProps (state, ownProps) {
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
  <Theme>
    <GlobalLoader/>
    <Layout
      left={
        null
      }
      right={<GlobalToolbar />}
    >
      <Box pad={{ bottom: 'large' }}>
        <SearchInput />
      </Box>
      {
        isFetching === true ? (
          <GlobalLoader isLoading />
        ) : (
          Object.keys(matches).length ? <Box /> : (
            <NoProfiles />
          )
        )
      }
    </Layout>
  </Theme>
)

export default connect(mapStateToProps, () => new Object())(SearchScreen)
