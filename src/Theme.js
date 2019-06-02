import React from 'react'

import {
  Grommet
} from 'grommet'
import { grommet } from 'grommet/themes'

const Theme = ({ children }) => (
  <Grommet
    full
    theme={grommet}
  >
    { children }
  </Grommet>
)

export default Theme