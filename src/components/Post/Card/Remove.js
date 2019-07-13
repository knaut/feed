// IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// COMPONENTS
import { Grommet, Box, Button, Grid } from 'grommet';

// STYLES
import css from '@emotion/css'

// ICONS
import { SubtractCircle } from 'grommet-icons';

// ACTIONS
import * as PostActions from '../../../actions/post'

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      deleteStatus: PostActions.deleteStatus
    }, dispatch)
  }
}

class Remove extends Component {
  state = {
    onHover: false
  }

  onEnter = () => {
    this.setState({
      onHover: true
    });
  }

  onLeave = () => {
    this.setState({
      onHover: false
    });
  }

  onDelete = () => {
    const { id } = this.props
    this.props.actions.deleteStatus({ id })
  }

  render() {
    const {
      onHover
    } = this.state

    return (
      <Box gridArea='delete' align='end' pad='small'
        onMouseEnter={this.onEnter}
        onMouseLeave={this.onLeave}
        onClick={this.onDelete}
        css={css`cursor: pointer;`}
      >
        <SubtractCircle
          size='medium' 
          color={onHover ? 'red' : 'gray2'}
          css={css`
            transition: all 0.2s ease-in-out;
          `}
        />
      </Box>
    )
  }
}

export default connect( () => new Object(), mapDispatchToProps)(Remove)

