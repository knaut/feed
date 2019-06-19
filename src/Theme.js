import React from 'react'

import {
  Grommet
} from 'grommet'
import { grommet } from 'grommet/themes'
import merge from 'deepmerge'


const feed = merge(grommet, {
  global: {
    colors: {
      purple: '#7A2EE8'
    }
  }
})

console.log(feed)

const Theme = ({ children }) => (
  <Grommet
    theme={feed}
  >
    { children }
  </Grommet>
)

export default Theme