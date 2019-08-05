// IMPORTS
import React, { Component } from 'react'
import Moment from 'moment'

// COMPONENTS
import Linkify from 'react-linkify'
import { feed } from '../../../Theme'

// STYLES
import css from '@emotion/css'

const componentDecorator = (href, text, key) => {
  return (
    <a href={href} key={key}
      css={css`
        color: ${feed.global.colors.purple};
        transition: all 0.2s ease-in-out;
        text-decoration: none;
        &:hover {
          color: ${feed.global.colors.cyan};
        }
      `}
    >
      {text}
    </a>
  )
};

export default (props) => {
  const {
    text
  } = props

  return (
    <Linkify componentDecorator={componentDecorator}>
      <div css={css`
        whitespace: pre-wrap;
        overflow-wrap: break-word;
      `}>
        {text.split('\n').map((item, key) => {
          return <span key={key}>{item}<br/></span>
        })}
      </div>
    </Linkify>
  )
}
