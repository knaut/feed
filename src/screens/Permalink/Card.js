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

const mapStateToProps = (state) => {
  const { permalink } = state
  return permalink
}

class PermalinkCard extends Component {
  render() {
    console.log(this)
    return null
  }
}

export default connect(mapStateToProps, {})(PermalinkCard)

