// IMPORTS
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  Grommet,
  Box,
  Button,
  Heading,
  Text
} from 'grommet'

import {
  UserNew,
  Info
} from 'grommet-icons'

// UTILS
import css from '@emotion/css'

function mapStateToProps (state) {
  return {
    isAuthenticated: state.user.isAuthenticated
  }
}

const CreateID = ({ isAuthenticated }) => isAuthenticated === false ? (
  <Box pad={isAuthenticated === false ? 'medium' : false}>
    <a href='https://browser.blockstack.org/sign-up'>
      <Button
        primary
        reverse
        css={css`border-radius: 35px;`}
        icon={<UserNew size='large' css={css`width: 40px;`} />}
        label={<Heading level={3} css={css`margin: 10px;`}>Create your ID to get started</Heading>}
      />
    </a>
  </Box>
) : null

export default connect(mapStateToProps, () => new Object())(CreateID)
