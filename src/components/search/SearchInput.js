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
      submit: SearchActions.searchSubmit
    }, dispatch)
  }
}

class SearchInput extends Component {
  state = {
    input: ''
  }

  onChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  onSubmit = () => {
    this.props.actions.submit({
      username: this.state.input
    })
  }

  render() {
    const {
      input
    } = this.state

    return (
      <Box
        fill
        margin={{top: 'medium'}}
        alignContent='center'
        direction="row-responsive"
        justify="center"
        align="center"
        css={css`
          position: relative;
          top: 2px;
        `}
      >
        <Box
          align='center'
          direction='row'
          width='large'
        >
          <Box 
            fill
            background='light-1' 
            css={css`
              border-top-left-radius: 25px;
              border-bottom-left-radius: 25px;
            `}
          >
            <TextInput 
              placeholder='Enter a Blockstack ID...'
              value={input}
              onChange={this.onChange}
              css={css`
                border: 5px solid white;
                box-sizing: border-box;
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
              background: transparent;
              border: 5px solid #7D4CDB;
              padding-left: 16px;
              padding-right: 18px;
              padding-top: 10px;
              padding-bottom: 9px;
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

export default connect( () => new Object(), mapDispatchToProps )(SearchInput)