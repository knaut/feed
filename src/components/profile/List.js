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

import ProfileRow from './Row'

import spoof from '../../../.storybook/user.json';

// const Row = () => (
//   <ProfileRow
//     isLoading={false}
//     isOnFeed={true}
//     isOnBlockstack={true}
//     isMe={false}
//     name={spoof.user.name}
//     username={spoof.user.username}
//     image={spoof.user.image}
//     description={spoof.user.description}
//   />
// )

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

      console.log(match)

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
        { list }
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, () => new Object() )(ProfileList)