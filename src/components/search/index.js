// IMPORTS
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

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

// ACTIONS
import * as SearchActions from '../../actions/search'

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      search: SearchActions.search
    }, dispatch)
  }
}

class Search extends Component {
  state = {
    input: ''
  }

  onChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  onSubmit = () => {
    // console.log('submit', this.state.input)
    this.props.actions.search({
      username: this.state.input
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
            onClick={this.onSubmit}
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

export default connect( () => new Object(), mapDispatchToProps )(Search)