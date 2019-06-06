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
import styles from '../../styles';

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
        <Button icon={<Search 
            color={active ? styles.colors.darks.purple : styles.colors.neutrals.light}
          />} primary style={{
            background: active ? styles.colors.neutrals.light : styles.colors.darks.purple,
            border: active ? `5px solid ${styles.colors.neutrals.dark}` : `5px solid ${styles.colors.primaries.purple}`,
            borderRadius: '24px',
            display: 'flex'
          }}/>
        </Link>
      </Box>
    );
  }
}


export default connect(mapStateToProps)(SearchIcon);