// IMPORTS
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// COMPONENTS
import { Grommet, Box, Button, Text } from 'grommet'
import { User, Aggregate, Add, FormSubtract } from 'grommet-icons'

// ROUTER
import { Link } from 'react-router-dom'

// STYLES
import css from '@emotion/css'

export default class ManageUser extends Component {
  render() {
    const {
      active,
      isInUserAuthCircle,
    } = this.props

    return (
      <Button
        border='medium'
        css={css`
          background: var(--light);
          border: 5px solid var(--purpleDark);
          border-radius: 24px;
          display: flex;
          transition: 0.2s all ease-in-out;
          &:hover {
            background: var(--redLight);
            border: 5px solid var(--red);
            color: var(--red);
          }
        `}
        
        icon={
          <Fragment>
            <FormSubtract color={`purpleDark`}/>
            <Aggregate color={`purpleDark`}/>
          </Fragment>
        }
      />

      
    )
  }
}