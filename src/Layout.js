// IMPORTS
import React, { Component } from 'react'

// STYLES
import css from '@emotion/css'

// COMPONENTS
import { 
  Box,
  Grid
} from 'grommet'
import MyProfile from './components/button/MyProfile'
import WrappedAddPost from './components/button/WrappedAddPost'
import Search from './components/button/Search'
import MyFeed from './components/button/MyFeed'

const FullGrid = ({children}) => (
  <Grid
    fill
    areas={[
      { name: 'main', start: [0, 0], end: [0, 0] },
    ]}
    columns={['flex']}
    rows={['flex']}
    gap='small'
  >
    <Box gridArea='main'>
      { children }
    </Box>
  </Grid>
)

const ColumnedGrid = ({ left, children, right }) => (
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
    <Box gridArea='main' align='center'>
      <Box width='large'>
        { children }
      </Box>
    </Box>
    <Box gridArea='right'>
      { right }
    </Box>
  </Grid>
)

export default class GlobalLayout extends Component {
  render() {
    const {
      left,
      right,
      columns
    } = this.props

    return (
      <Box
        fill 
        align='center'
        justify='center'
        css={css`
          background: var(--purpleDark);
          min-height: 100vh;
        `}
      >
        { columns === false ? 
          (
            <FullGrid> 
              { this.props.children }
            </FullGrid>
          ) : (
            <ColumnedGrid left={left} right={right}>
              { this.props.children }
            </ColumnedGrid>
          )
        }
      </Box>
    )
  }
}