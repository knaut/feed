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
import BlockstackProvider from '../../components/BlockstackProvider'
import CacheProvider from '../../components/CacheProvider'

import PostList from '../../components/Post/List'

// UTILS
import css from '@emotion/css'

const DEBUG = process.env.DEBUG

/*
  This screen is for a given user's feed,
  in this case called the "author"
*/

const mapStateToProps = (state, ownProps) => {
  console.log({state, ownProps})

  const { author } = ownProps.match.params
  return {
    author
  }
}

const Test = (props) => {
  console.log(props)
  return <div>'Test'</div>
}

const MapCacheToPostList = ({cache, author}) => {
  /*
    take cache state passed as props from CacheProvider,
    then map it to the prop pattern our PostList expects
  */
  return <PostList
    posts={ cache.Status }
    author={ author }
  />
}

class Feed extends Component {
  componentDidMount() {
    /*
      dispatch actions that get this author's blockstack profile,
      if any, and fetch their feed cache, if any
    */
    // this.props.actions.getFeed()
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
          <BlockstackProvider id={author}>
            <CacheProvider id={author}>
              <Test/>
            </CacheProvider>
          </BlockstackProvider>
        </Layout>
      </Theme>
    )
  }
}

export default connect(mapStateToProps)(Feed)