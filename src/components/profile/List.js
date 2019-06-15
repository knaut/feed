// IMPORTS
import React, { Component } from 'react'

// COMPONENTS
import {
  Box,
  Button,
  FormField,
  TextInput
} from 'grommet';

import ProfileRow from './Row'

import spoof from '../../../.storybook/user.json';

const Row = () => (
  <ProfileRow
    isLoading={false}
    isOnFeed={true}
    isOnBlockstack={true}
    isMe={false}
    name={spoof.user.name}
    username={spoof.user.username}
    image={spoof.user.image}
    description={spoof.user.description}
  />
)

class ProfileList extends Component {
  render() {

    const { list } = this.props

    for (let i = 0; list.length > i; ++i) {
      console.log(list[i])

    }

    return (
      <span>
        <Row/>
      </span>
    )
  }
}

export default ProfileList