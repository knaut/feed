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

import Card from '../../components/Post/Card'

const mapStateToProps = (state) => {
  const { permalink } = state
  return {
    permalink
  }
}

class PermalinkCard extends Component {
  render() {
    const {
      permalink
    } = this.props
    
    return permalink.post ? <Card
      {...this.props.permalink}
      isPermalinked={true}
    /> : <Box
      align='center'
      justify='center'
    >
      <Heading level={4} color='purplePastel'>…nothing to show yet for this permalink…</Heading>
    </Box>
  }
}

export default connect(mapStateToProps, {})(PermalinkCard)

