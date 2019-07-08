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
import CacheProvider from '../../components/CacheProvider'

import PostList from '../../components/Post/List'

// UTILS
import css from '@emotion/css'

// ACTIONS
import * as FeedActions from '../../actions/feed'

const DEBUG = process.env.DEBUG

/*
  This screen is for a given user's feed,
  in this case called the "author"
*/

const mapStateToProps = (state, ownProps) => {
  // console.log({state, ownProps})

  const { author } = ownProps.match.params
  return {
    author
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      fetchFeed: FeedActions.fetchFeed
    }, dispatch)
  }
}

class Feed extends Component {
  componentDidMount() {
    /*
      dispatch actions that get this author's blockstack profile,
      if any, and fetch their feed cache, if any
    */
    const {
      author
    } = this.props

    this.props.actions.fetchFeed({ author })
  }

  render () {
    if (DEBUG) console.log(this)

    const {
      author
    } = this.props

    return (
      <Theme>
        <Layout
          left={null}
          right={null}
          columns={false}
        >
          <PostList author={author}/>
        </Layout>
      </Theme>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
