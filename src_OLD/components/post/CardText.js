// IMPORTS
import React, { Component } from 'react'
import Moment from 'moment'

// STYLES
import css from '@emotion/css'

export default (props) => {
  const {
    text
  } = props

  return (
    <div css={css`
      whitespace: pre-wrap;
      overflow-wrap: break-word;
    `}>
      {text}
    </div>
  )
}
