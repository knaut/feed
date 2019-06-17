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

    return (
      <span>
        <Row/>
      </span>
    )
  }
}

export default ProfileList