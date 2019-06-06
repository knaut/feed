// IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// COMPONENTS
import { Grommet, Box, Button } from 'grommet';
import { User } from 'grommet-icons';

// ROUTER
import { Link } from 'react-router-dom'

// STYLES
import styles from '../../styles';

function mapStateToProps(state) {
  const id = state.user.username
  let active = false

  if (state.router.location.pathname === `/${id}`) {
    active = true
  }

  return {
    id,
    active
  }
}

class MyProfileButton extends Component {
  render() {
    const { active, id } = this.props

    return (
      <Box align="center" pad={{top: 'medium', left: 'medium', right: 'medium', bottom: 'none'}}>
        <Link to={`/${id}`}>
          <Button icon={<User 
            color={active ? styles.colors.darks.purple : styles.colors.neutrals.light}
          />} primary 
          style={{
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

export default connect(mapStateToProps)(MyProfileButton);