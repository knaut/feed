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
import GlobalToolbar from '../../components/GlobalToolbar'

import ProfileResult from './ProfileResult'
import SearchInput from './SearchInput'
import Loader from '../../components/GlobalLoader/Loader'

import ProfileCard from '../../components/Profile/Card'

function mapStateToProps (state, ownProps) {
  const matches = state.search.matches
  const isFetching = state.search.isFetching


  return {
    id: state.blockstack.id,
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

class Search extends Component {
  render() {
    const {
      isFetching,
      matches
    } = this.props

    const authorId = Object.keys(matches)[0]
    const blockstackUserIsResult = this.props.id === authorId ? true : false

    return (
      <Theme>
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
              <Loader isLoading/>
            ) : (
              Object.keys(matches).length ? <ProfileResult
                isLoading={false}
                isOnBlockstack={true}
                isMe={ blockstackUserIsResult }
                isOnFeed={ null }
                image={ matches[ authorId ].blockstack.image }
                name={ matches[ authorId ].blockstack.name }
                username={ matches[ authorId ].blockstack.username }
                description={ matches[ authorId ].blockstack.description }
              /> : (
                <NoProfiles />
              )
            )
          }
        </Layout>
      </Theme>
    )
  }
}

export default connect(mapStateToProps, {})(Search)
