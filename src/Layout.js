// IMPORTS
import React, { Component } from 'react'

// STYLES
import styles from './styles'

// COMPONENTS
import { 
  Box,
  Grid
} from 'grommet'
import MyProfile from './components/button/MyProfile'
import WrappedAddPost from './components/button/WrappedAddPost'
import Circles from './components/button/Circles'
import Search from './components/button/Search'
import MyFeed from './components/button/MyFeed'

export default class GlobalLayout extends Component {
  render() {
    console.log(this)

    const {
      left,
      right
    } = this.props

    return (
       <div 
        style={{
          background: styles.colors.darks.purple,
          ...styles.app.container,
          justifyContent: 'start'
        }}
      >
        <Box fill align="center" justify="center"
          style={{
            alignItems: 'center',
            align: 'center',
            justify: 'center',
          }}
        >
          <Grid
            fill
            areas={[
              { name: 'left', start: [0, 0], end: [0, 0] },
              { name: 'main', start: [1, 0], end: [1, 0] },
              { name: 'right', start: [2, 0], end: [2, 0] }
            ]}
            columns={['xsmall', 'flex', 'xsmall']}
            rows={['flex']}
            gap='small'
          >
            <Box gridArea='left'>
              { left }
            </Box>
            <Box gridArea='main'>
              { this.props.children }
            </Box>
            <Box gridArea='right'>
              { right }
            </Box>
          </Grid>
        </Box>
      </div>
    )
  }
}