// IMPORTS
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// COMPONENTS
import { Grommet, Box, Button, Anchor } from 'grommet'
import { User } from 'grommet-icons'

// ROUTER
import { Link } from 'react-router-dom'
import { push } from 'react-router-redux'

// STYLES
import css from '@emotion/css'

// ACTIONS
import * as ProfileActions from '../../actions/profile'

function mapStateToProps (state) {
  const id = state.blockstack.id

  let active = false
  if (state.router.location.pathname === `/${id}/profile`) {
    active = true
  }

  return {
    id,
    active
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      loadProfile: ProfileActions.loadProfile
    }, dispatch)
  }
}

class MyProfileButton extends Component {
  onLink = (e) => {
    e.preventDefault()

    const {
      id
    } = this.props

    this.props.actions.loadProfile({
      author: id
    }) // cheeky side effect to fix our URL
  }

  render () {
    const { active, id } = this.props
    
    return (
      <Box align='center' pad={{ top: 'medium', left: 'medium', right: 'medium', bottom: 'none' }}>
        <Anchor href={`/${id}/profile`} onClick={this.onLink}>
          <Button
            icon={
              <User color={active ? `purpleDark` : `light`} />
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
        </Anchor>
      </Box>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProfileButton)
