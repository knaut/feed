// IMPORTS
import React, { Component } from 'react';

// COMPONENTS
import { Box, Button } from 'grommet';
import { Note } from 'grommet-icons';

// STYLES
import css from '@emotion/css'

// THEME
import { feed } from '../../Theme'

class NotePost extends Component {
  render() {
    const { selected } = this.props
    return (
      <Box>
        <Button
          icon={
            <Note color={selected ? 'purpleDark' : 'light-6'}/>
          }
        />
      </Box>
    )
  }
}

export default NotePost;