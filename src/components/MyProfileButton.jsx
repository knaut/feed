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
import styles from '../styles';

function mapStateToProps(state) {
  const id = state.user.username.split('.')[0]
  
  return {
    id
  }
}

class MyProfileButton extends Component {
  render() {
    return (
      <Box align="center" pad={{top: 'medium', left: 'medium', right: 'medium', bottom: 'none'}}>
        <Link to={`/${this.props.id}`}>
          <Button icon={<User />} primary style={{
            background: 'transparent',
            border: `5px solid ${styles.colors.primaries.purple}`,
            borderRadius: '24px',
            display: 'flex'
          }}/>
        </Link>
      </Box>
    );
  }
};

export default connect(mapStateToProps)(MyProfileButton);