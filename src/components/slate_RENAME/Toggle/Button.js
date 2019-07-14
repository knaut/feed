// IMPORTS
import React, { Component } from 'react';

// COMPONENTS
import { Grommet, Box, Button } from 'grommet';
import { Add } from 'grommet-icons';

// STYLES
import css from '@emotion/css'

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
            <Add color={active ? `purpleDark` : `light`} />
          } 
          onClick={this.add}
          primary
          css={css`
            background: ${ active ? 'var(--light)' : 'var(--purpleDark)'};
            border: ${ active ? '5px solid var(--dark)' : '5px solid var(--purple)'};
            border-radius: 24px;
            display: flex;
            transition: 0.2s all ease-in-out;
          `}
        />
      </Box>
    );
  }
}

export default AddPost;