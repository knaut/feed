// IMPORTS
import React, { Component } from 'react';

// COMPONENTS
import { Grommet, Box, Button } from 'grommet';
import { Add } from 'grommet-icons';


// STYLES
import styles from '../../styles';

// ACTIONS
// import * as EditorActions from '../actions/editor';

class AddPost extends Component {
  add = () => {
    this.props.actions.add(null);
  }

  render() {
    const { active } = this.props;

    return (
      <Box align="center" pad="medium">
        <Button 
          icon={
            <Add color={active ? styles.colors.darks.purple : styles.colors.neutrals.light} />
          } 
          onClick={this.add}
          primary 
          style={{
            background: active ? styles.colors.pastels.purple : styles.colors.darks.purple,
            border: active ? `5px solid ${styles.colors.primaries.purple}` : `5px solid ${styles.colors.primaries.purple}`,
            borderRadius: '24px',
            display: 'flex',
            transition: '0.2s all ease-in-out'
          }}
        />
      </Box>
    );
  }
}

export default AddPost;