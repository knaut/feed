// IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux'

// STYLES
import styles from '../styles';

// COMPONENTS
import { Grommet, Box, Button, Grid, TextArea, Heading, Text, Image } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Add, Star, Note, SubtractCircle, Gremlin, Help, User, Language } from 'grommet-icons';
import { FadeLoader, BarLoader, HashLoader, BounceLoader } from 'react-spinners';
import GlobalLoader from './GlobalLoader'

// export a version of the GlobalLoader that blocks component chain
// from rendering until the cache is loaded.
// once the cache loads, render the children as normal
function mapStateToProps(state) {
  return {
    isLoaded: state.cache.isLoaded
  }
}

const Provider = ({ isLoaded, children }) => {
  return isLoaded ? children : <GlobalLoader/>
}

export default connect(mapStateToProps, () => new Object())(Provider)
