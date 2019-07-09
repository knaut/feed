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
import GlobalLoader from '../../components/GlobalLoader'
import GlobalToolbar from '../../components/GlobalToolbar'
import ProfileCard from '../../components/Profile'

// UTILS
import css from '@emotion/css'

// ACTIONS
// import * as FeedActions from '../../actions/feed'

const DEBUG = process.env.DEBUG

const mapStateToProps = (state, ownProps) => {
  const { author } = ownProps.match.params
  const blockstackUserIsAuthor = author === state.blockstack.id

  return {
    author,
    blockstackUserIsAuthor
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      // fetchFeed: FeedActions.fetchFeed
    }, dispatch)
  }
}

class Profile extends Component {
  componentDidMount() {
    /*
      dispatch actions that get this author's blockstack profile,
      if any, and fetch their feed cache, if any
    */
    const {
      author
    } = this.props

    // this.props.actions.fetchProfile({ author })
  }

  render () {
    if (DEBUG) console.log(this)

    const {
      author,
      blockstackUserIsAuthor
    } = this.props

    return (
      <Theme>
        <GlobalLoader/>
        <Layout
          columns={true}
          left={null}
          right={
            /*
              this toolbar is global, specific to the logged in user
            */
            <GlobalToolbar blockstackUserIsAuthor={blockstackUserIsAuthor}/>
          }
        >
          <Box margin={{ top: 'medium' }}>
            <ProfileCard author={author} blockstackUserIsAuthor={blockstackUserIsAuthor}/>
          </Box>
        </Layout>
      </Theme>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
