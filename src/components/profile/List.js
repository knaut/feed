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
// GLOBALS
import GlobalLoader from '../GlobalLoader'
// SEARCH
import ProfileRow from './Row'
import Card from './Card'

function mapStateToProps(state) {
  return {
    ...state.search,
    loggedInUser: state.user.username
  }
}

class ProfileList extends Component {
  render() {
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
        description
      } = match.blockstack

      let isOnFeed = false
      if (match.profile) {
        isOnFeed = true
      }

      let isMe = false
      if (loggedInUser === username) {
        isMe = true
      }

      list.push(
        <Card
          key={key}
          isLoading={false}
          isOnFeed={isOnFeed}
          isOnBlockstack={true}
          isMe={isMe}
          name={name ? name : 'No name provided.'}
          username={username}
          description={description ? description : 'No description available.'}
          image={image}
        />
      )
    }

    return (
      <React.Fragment>
        { isFetching === true ? <GlobalLoader isLoading={true}/> : list }
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, () => new Object() )(ProfileList)