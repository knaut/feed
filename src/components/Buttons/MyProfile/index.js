// IMPORTS
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Button from './Button'

const mapStateToProps = (state) => {
  return {

  }
}

const Wrapped = () => (
  <Button/>
)

export default connect(mapStateToProps)(Wrapped)