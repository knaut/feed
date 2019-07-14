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
} from 'grommet'

import Loader from '../../components/GlobalLoader/Loader'

// SEARCH
import Card from '../../components/Profile/Card'

function mapStateToProps (state) {
  return {
    ...state.search,
    loggedInUser: state.blockstack.id
  }
}

class SearchResultProfile extends Component {
  render () {
    const {
      isFetching,
      matches,
      loggedInUser
    } = this.props

    const list = []
    for (let key in matches) {
      const match = matches[key]

      const {
        name,
        username,
        image,
        description,
        isOnFeed,
        isOnBlockstack
      } = match.blockstack

      let isMe = false
      if (loggedInUser === username) {
        isMe = true
      }

      list.push(
        <Card
          key={key}
          isLoading={false}
          isOnFeed={isOnFeed}
          isOnBlockstack={isOnBlockstack}
          isMe={isMe}
          name={name || username}
          username={username}
          description={description || 'No description available.'}
          image={image}
        />
      )
    }

    return (
      <React.Fragment>
        { isFetching === true ? <Loader /> : list }
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, {})(SearchResultProfile)
