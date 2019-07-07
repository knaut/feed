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

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: {}
//   }
// }

// function mapStateToProps(state, ownProps) {
//   return 
// }

const mapStateToProps = (state, ownProps) =>(
  return {
    state,
    ownProps
  }
)

const mapDispatchToProps = (dispatch) => ({
  actions: /*bindActionCreators({})*/ {}
})



export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(BlockstackProvider)