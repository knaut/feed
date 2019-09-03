// IMPORTS
import React, { Component, Fragment } from 'react'
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
  Favorite,
  Configure,
  Group
} from 'grommet-icons'

// COMPONENTS
import { Link } from 'react-router-dom'

import Layout from '../Layout'
import Theme from '../../Theme'

import Slate from '../../components/Slate'
import SlateToggleButton from '../../components/Slate/Toggle'
import GlobalLoader from '../../components/GlobalLoader'
import GlobalToolbar from '../../components/GlobalToolbar'
import PostList from '../../components/Post/List'

// UTILS
import css from '@emotion/css'

// ACTIONS
import * as FeedActions from '../../actions/feed'
import * as CacheActions from '../../actions/cache'

const DEBUG = process.env.DEBUG

/*
  This screen is for a given user's feed,
  in this case called the "author"
*/

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
      fetchFeed: FeedActions.fetchFeed,
      fetchCache: CacheActions.fetchCacheThunk,
      setFeedAsAuthor: FeedActions.setFeedAsAuthor
    }, dispatch)
  }
}

class FeedButton extends Component {
  render() {
    const {
      active
    } = this.props

    return (
      <Box align='center' pad={{ top: 'medium', left: 'medium', right: 'medium', bottom: 'none' }}>
        <Button 
          primary
          css={css`
            background: ${active ? 'var(--light)' : 'var(--purpleDark)'};
            border: ${active ? '5px solid var(--dark)' : '5px solid var(--purple)'};
            border-radius: 24px;
            display: flex;
            transition: 0.2s all ease-in-out;
          `}
          icon={
            <Group color={active ? `purpleDark` : `light`} />
          }
        />
      </Box>
    )
  }
} 

class CircleFeed extends Component {
  componentDidMount() {
    /*
      dispatch actions that get this author's blockstack profile,
      if any, and fetch their feed cache, if any
    */
    const {
      author,
      blockstackUserIsAuthor
    } = this.props

    this.props.actions.fetchFeed({ author })
  }

  render () {
    const {
      author,
      blockstackUserIsAuthor
    } = this.props

    return (
      <Theme>
        <GlobalLoader/>
        <Layout
          columns={true}
          left={
            /*
              block the add post button from displaying
              if the logged in user isn't the author of this feed
            */
            blockstackUserIsAuthor === true ? (
              <Fragment>
                <FeedButton/>
              </Fragment>
            ) : null
          }
          right={
            /*
              this toolbar is global, specific to the logged in user
            */
            <GlobalToolbar blockstackUserIsAuthor={blockstackUserIsAuthor}/>
          }
        >
          {
            /*
              we only show the slate for the logged in user
            */
            blockstackUserIsAuthor === true ? <Slate /> : null
          }
          <Box margin={{ top: 'medium' }}>
            {/*<PostList author={author} blockstackUserIsAuthor={blockstackUserIsAuthor}/>*/}
          </Box>
        </Layout>
      </Theme>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CircleFeed)
