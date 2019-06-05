// IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// COMPONENTS
import { Grommet, Box, Button } from 'grommet';
import { User, Home } from 'grommet-icons';

// ROUTER
import { Link } from 'react-router-dom'

// STYLES
import styles from '../../styles';

function mapStateToProps(state) {
  const id = state.user.username
  let active = false

  if (state.router.location.pathname === `/${id}/feed`) {
    active = true
  }

  return {
    id,
    active
  }
}

class MyFeedButton extends Component {
  render() {
    const { active, id } = this.props
    console.log({active, id})

    return (
      <Box align="center" pad={{top: 'medium', left: 'medium', right: 'medium', bottom: 'none'}}>
        <Link to={`/${id}/feed`}>
          <Button icon={
            <Home
              color={active ? styles.colors.darks.purple : styles.colors.neutrals.light}
            />} primary active style={{
            background: active ? styles.colors.neutrals.light : styles.colors.darks.purple,
            border: active ? `5px solid ${styles.colors.neutrals.dark}` : `5px solid ${styles.colors.primaries.purple}`,
            borderRadius: '24px',
            display: 'flex'
          }}/>
        </Link>
      </Box>
    );
  }
};

export default connect(mapStateToProps)(MyFeedButton);