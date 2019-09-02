// IMPORTS
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// COMPONENTS
import { Grommet, Box, Button } from 'grommet'
import { User, Aggregate } from 'grommet-icons'

// ROUTER
import { Link } from 'react-router-dom'

// STYLES
import css from '@emotion/css'

function mapStateToProps (state) {
  const id = state.blockstack.id
  let active = false

  if (state.router.location.pathname === `/${id}`) {
    active = true
  }

  return {
    id,
    active
  }
}

export class CirclesButton extends Component {
  render () {
    const { active, id } = this.props

//      <Box align='center' pad={{ top: 'medium', left: 'medium', right: 'medium', bottom: 'none' }}>

  //    </Box>


    return (
        <Link to={`/${id}`} title='My Feed'>
          <Button
            icon={
              <Aggregate color={active ? `purpleDark` : `light`} />
            }
            primary
            css={css`
              background: ${active ? 'var(--light)' : 'var(--purpleDark)'};
              border: ${active ? '5px solid var(--dark)' : '5px solid var(--purple)'};
              border-radius: 24px;
              display: flex;
              transition: 0.2s all ease-in-out;
            `}
          />
        </Link>
    )
  }
};

export default connect(mapStateToProps)(CirclesButton)
