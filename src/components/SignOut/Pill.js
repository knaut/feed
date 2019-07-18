// IMPORTS
import React, { Component } from 'react'
import * as blockstack from 'blockstack'

// COMPONENTS
import {
  Box,
  Button,
  Image,
  Heading,
  Text,
  Anchor
} from 'grommet'
import {
  Login,
  Logout
} from 'grommet-icons'

class SignOutPill extends Component {
  onClick = () => {
    const session = new blockstack.UserSession()
    session.signUserOut('/')
  }

  render() {
    return (
      <Box pad='small'>
        <Button
          onClick={this.onClick}
          plain
          icon={<Logout color='purplePastel'/>}
          label='Sign Out'
          color='purplePastel'
        />
      </Box>
    )
  }
}

export default SignOutPill