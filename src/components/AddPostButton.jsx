// IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';

// COMPONENTS
import { Grommet, Box, Button } from 'grommet';
import { Add } from 'grommet-icons';

// STYLES
import styles from '../styles';

class AddPostButton extends Component {
  render() {
    return (
      <Box align="center" pad="medium">
        <Button icon={<Add />} onClick={() => {}} primary style={{
          background: 'transparent',
          border: `5px solid ${styles.colors.primaries.purple}`
        }}/>
      </Box>
    );
  }
};

export default AddPostButton;