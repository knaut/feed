// IMPORTS
import React, { Component } from 'react'
import { connect } from 'react-redux'

// STYLES
import css from '@emotion/css'

// COMPONENTS
import { Grommet, Box, Button, Grid, TextArea, Heading, Text, Image } from 'grommet'
import { grommet, dark } from 'grommet/themes'
import { Add, Star, Note, SubtractCircle, Gremlin, Help, User, Language } from 'grommet-icons'
import { FadeLoader, BarLoader, HashLoader, BounceLoader } from 'react-spinners'
import GlobalLoader from './GlobalLoader'

// export a version of the GlobalLoader that blocks component chain
// from rendering until the cache is loaded.
// once the cache loads, render the children as normal
function mapStateToProps (state) {
  const isLoaded = state.cache.isLoaded

  return {
    isLoaded
  }
}

const Provider = ({ isLoaded, children }) => {
  return isLoaded ? children : <Box css={css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -140px;
  `}><GlobalLoader isLoading /></Box>
}

export default connect(mapStateToProps, () => new Object())(Provider)
