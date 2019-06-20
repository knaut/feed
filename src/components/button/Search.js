// IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// COMPONENTS
import { Grommet, Box, Button } from 'grommet';
import { User, Search } from 'grommet-icons';

// ROUTER
import { Link } from 'react-router-dom'

// STYLES
import css from '@emotion/css'

function mapStateToProps(state) {
  let active = false

  if (state.router.location.pathname === `/search`) {
    active = true
  }

  return {
    active
  }
}


class SearchIcon extends Component {  
  render() {
    const { active } = this.props

    return (
      <Box align="center" pad={{top: 'medium', left: 'medium', right: 'medium', bottom: 'none'}}>
        <Link to={`/search`}>
          <Button 
            icon={
              <Search color={active ? `purpleDark` : `light`} />
            } 
            primary
            css={css`
              background: ${ active ? 'var(--light)' : 'var(--purpleDark)'};
              border: ${ active ? '5px solid var(--dark)' : '5px solid var(--purple)'};
              border-radius: 24px;
              display: flex;
              transition: 0.2s all ease-in-out;
            `}
          />
        </Link>
      </Box>
    );
  }
}


export default connect(mapStateToProps)(SearchIcon);