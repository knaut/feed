// IMPORTS
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// COMPONENTS
import {
  Box,
  Button,
  FormField,
  TextInput
} from 'grommet';
import { Search as SearchIcon } from 'grommet-icons';

// STYLES
import css from '@emotion/css'

const mapStateToProps = (state, ownProps) => {
  return {
    state,
    ownProps
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: /*bindActionCreators({})*/ {}
})

const BlockstackProvider = (props) => {
  console.log(props)

  return props.children
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(BlockstackProvider)