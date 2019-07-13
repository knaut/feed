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

// COMPONENTS
import { Link } from 'react-router-dom'

import Layout from '../Layout'
import Theme from '../../Theme'
import GlobalLoader from '../../components/GlobalLoader'
import GlobalToolbar from '../../components/GlobalToolbar'
import Card from './Card'

// ACTIONS
import * as PermalinkActions from '../../actions/permalink'

const DEBUG = process.env.DEBUG

const mapStateToProps = (state, ownProps) => {
  const { author, link } = ownProps.match.params
  const blockstackUserIsAuthor = author === state.blockstack.id

  return {
    author,
    link,
    blockstackUserIsAuthor
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      fetchPermalink: PermalinkActions.fetchPermalink
    }, dispatch)
  }
}

class Permalink extends Component {
  componentDidMount() {
    const {
      author,
      link,
      blockstackUserIsAuthor
    } = this.props

    this.props.actions.fetchPermalink({
      author,
      link,
      blockstackUserIsAuthor
    })
  }

  render() {
    const {
      author,
      link,
      blockstackUserIsAuthor
    } = this.props


    return (
      <Theme>
        <GlobalLoader/>
        <Layout
          left={false}
          right={
            /*
              this toolbar is global, specific to the logged in user
            */
            <GlobalToolbar blockstackUserIsAuthor={blockstackUserIsAuthor}/>
          }
        >
          <Box margin={{ top: 'medium' }}>
            <Card author={author} blockstackUserIsAuthor={blockstackUserIsAuthor} link={link}/>
          </Box>
        </Layout>
      </Theme>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Permalink)