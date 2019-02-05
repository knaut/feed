// IMPORTS
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// COMPONENTS
import { Grommet, Box, Button } from 'grommet';
import { Add } from 'grommet-icons';

// STYLES
import styles from '../styles';

// ACTIONS
import * as EditorActions from '../actions/editor';

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      activateEditor: EditorActions.activateEditor
    }, dispatch)
  }
}

class AddPostButton extends Component {
  handleClick = () => {
    // console.log(this);
    this.props.actions.activateEditor({
      active: false
    })
  }

  render() {
    return (
      <Box align="center" pad="medium">
        <Button icon={<Add/>} onClick={this.handleClick} primary 
          style={{
            background: 'transparent',
            border: `5px solid ${styles.colors.primaries.purple}`,
            borderRadius: '24px',
            display: 'flex'
          }}
        />
      </Box>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPostButton);