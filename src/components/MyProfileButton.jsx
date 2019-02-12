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

const MyProfileButton = (user) => {
  return (
    <Box align="center" pad={{top: 'medium', left: 'medium', right: 'medium', bottom: 'none'}}>
      <Link to={`/${user.id}`}>
        <Button icon={<User />} primary style={{
          background: 'transparent',
          border: `5px solid ${styles.colors.primaries.purple}`,
          borderRadius: '24px',
          display: 'flex'
        }}/>
      </Link>
    </Box>
  );
};

export default MyProfileButton;