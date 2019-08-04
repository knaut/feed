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

// STYLES
import css from '@emotion/css'

class SignOutButton extends Component {
  state = {
    hover: false
  }

  onClick = () => {
    const session = new blockstack.UserSession()
    session.signUserOut('/')
  }

  render() {
    const { label } = this.props

    return (
      <Box align='center'>
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
        <Anchor title='Sign Out'>
          <Box round='medium' css={css`overflow:hidden;`}><Button
            onClick={this.onClick}
            onMouseEnter={e => this.setState({hover: true})}
            onMouseLeave={e => this.setState({hover: false})}
            plain
            pad='medium'
            // hoverIndicator='brand'
          >
            <Box pad='small'>
              <Logout color={this.state.hover ? 'redPastel': 'purplePastel'} css={css`
                transition: all 0.1s ease-in-out;
              `}/>
            </Box>
          </Button></Box>
        </Anchor>
        )
      }
      </Box>
    )
  }
}

export default SignOutButton