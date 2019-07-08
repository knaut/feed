// IMPORTS
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// COMPONENTS
import {
  Grommet,
  Box,
  Button,
  Heading,
  Text,
  Anchor
} from 'grommet'
import {
  UserNew,
  Info,
  Grow,
  Favorite
} from 'grommet-icons'

// COMPONENTS
import { Link } from 'react-router-dom'

import Layout from '../Layout'
import Theme from '../../Theme'

// UTILS
import css from '@emotion/css'

const DEBUG = process.env.DEBUG

/*
  This screen is for a given user's feed,
  in this case called the "author"
*/

const mapStateToProps = (state, ownProps) => {
  console.log({state, ownProps})
  return {

  }
}

class Feed extends Component {
  render () {
    if (DEBUG) console.log(this)

    return (
      <Theme>
        <Layout
          left={null}
          right={null}
          columns={false}
        >
          
        </Layout>
      </Theme>
    )
  }
}

export default connect(mapStateToProps)(Feed)