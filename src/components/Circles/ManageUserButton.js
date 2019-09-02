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

const StateIcon = ({ active, isInUserAuthCircle }) => {
  if (active) {
    return (
      <Fragment>
        <FormSubtract color={`red`} css={css`transition: 0.2s all ease-in-out;`}/>
        <Aggregate color={`purpleDark`} css={css`transition: 0.2s all ease-in-out;`}/>
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        <FormSubtract color={`purpleDark`} css={css`transition: 0.2s all ease-in-out;`}/>
        <Aggregate color={`purpleDark`} css={css`transition: 0.2s all ease-in-out;`}/>
      </Fragment>
    )
  }
}

export default class ManageUser extends Component {
  state = {
    hover: false
  }

  render() {
    const {
      hover
    } = this.state

    const {
      active,
      label,
      isInUserAuthCircle,
    } = this.props

    return (
      <Button
        onMouseEnter={() => this.setState({hover: true})}
        onMouseLeave={() => this.setState({hover: false})}
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
        icon={ <StateIcon active={hover} /> }
      />

      
    )
  }
}