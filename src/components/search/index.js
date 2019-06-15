// IMPORTS
import React, { Component } from 'react'

// COMPONENTS
import {
  Box,
  Button,
  FormField,
  TextInput
} from 'grommet';
import { Search as SearchIcon } from 'grommet-icons';

// STYLES
import css from '@emotion/css'

class Search extends Component {
  state = {
    input: ''
  }

  onChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    return (
      <Box
        margin={{top: 'medium'}}
        width='100%'
        alignContent='center'
        direction="row-responsive"
        justify="center"
        align="center"
        css={css`
          position: relative;
          top: 3px;
        `}
      >
        <Box
          align='center'
          direction='row'
        >
          <Box 
            background='light-1' 
            width='large'
            css={css`
              border: 2px solid white;
              border-top-left-radius: 25px;
              border-bottom-left-radius: 25px;
            `}
          >
            <TextInput 
              placeholder='Enter a Blockstack ID...'
              value={this.state.input}
              onChange={this.onChange}
              css={css`
                border: 0;
                padding-left: 24px;
                border-top-left-radius: 25px;
                border-bottom-left-radius: 25px;
              `}
            />
          </Box>
          <Button
            primary
            icon={<SearchIcon/>}
            css={css`
              padding-left: 24px;
              padding-right: 24px;
              border-top-right-radius: 25px;
              border-bottom-right-radius: 25px;
              border-bottom-left-radius: 0;
              border-top-left-radius: 0;
            `}
          />
        </Box>
        
      </Box>
    )
  }
}

export default Search