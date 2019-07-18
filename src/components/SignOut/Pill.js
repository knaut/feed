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

class SignOut extends Component {
  onClick = () => {
    const session = new blockstack.UserSession()
    session.signUserOut('/')
  }

  render() {
    const { label } = this.props

    return (
      <Box align='center' pad={{ top: 'small', left: 'medium', right: 'medium', bottom: 'none' }}>
      {
        label ? (
          <Button
            onClick={this.onClick}
            plain
            icon={<Logout color='purplePastel'/>}
            label='Sign Out'
            color='purplePastel'
          />
        ) : (
          <Button
            onClick={this.onClick}
            plain
            icon={<Logout color='purplePastel'/>}
            color='purplePastel'
          />
        )
      }
      </Box>
    )
  }
}

export default SignOut