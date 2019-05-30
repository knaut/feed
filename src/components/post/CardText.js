// IMPORTS
import React, { Component } from 'react';
import Moment from 'moment';

// STYLES
import styles from '../../../src/styles';
/** @jsx jsx */ import { jsx, Global } from '@emotion/core'
import css from '@emotion/css'
import styled from '@emotion/styled'

export default (props) => {
  const {
    text
  } = props;

  return (
    <div css={css`
      whitespace: pre-wrap;
      overflow-wrap: break-word;
    `}>
      {text}
    </div>
  );
}