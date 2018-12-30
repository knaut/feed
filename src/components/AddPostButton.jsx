// IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';

// COMPONENTS
import { Grommet, Box, Button } from 'grommet';
import { Add } from 'grommet-icons';

class AddPostButton extends Component {
  render() {
    return (
      <Box align="center" pad="medium">
        <Button icon={<Add />} onClick={() => {}} primary/>
      </Box>
    );
  }
};

export default AddPostButton;