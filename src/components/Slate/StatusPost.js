// IMPORTS
import React, { Component } from 'react';

// COMPONENTS
import { Box, Button } from 'grommet';
import { Edit } from 'grommet-icons';

// STYLES
import css from '@emotion/css'

// THEME
import { feed } from '../../Theme'

class StatusPost extends Component {
  render() {
    const { selected } = this.props
    return (
      <Box>
        <Button
          icon={
            <Edit color={selected ? 'purpleDark' : 'light-6'}/>
          }
        />
      </Box>
    )
  }
}

export default StatusPost;