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

function mapStateToProps(state) {
  return state.search
}

class ProfileList extends Component {
  render() {
    const {
      isFetching,
      matches
    } = this.props

    const list = []
    for (let key in matches) {
      const match = matches[key]

      const {
        id, 
        Status
      } = match.profile

      const {
        name,
        username,
        image,
        description
      } = match.blockstack

      list.push(
        <ProfileRow
          key={key}
          isLoading={false}
          isOnFeed={true}
          isOnBlockstack={true}
          isMe={false}
          name={name}
          username={username}
          description={description}
          image={image}
        />
      )
    }

    console.log(list)

    return (
      <React.Fragment>
        { isFetching === true ? <GlobalLoader isLoading={true}/> : list }
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, () => new Object() )(ProfileList)