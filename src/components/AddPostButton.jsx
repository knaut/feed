// IMPORTS
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// COMPONENTS
import { Grommet, Box, Button } from 'grommet';
import { Add } from 'grommet-icons';

// STYLES
import styles from '../styles';

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators({
    //   onEditorInputChange: 
    // }, dispatch)
  }
}

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

export default connect(mapDispatchToProps)(AddPostButton);