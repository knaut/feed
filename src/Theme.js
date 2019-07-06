import React from 'react'

import {
  Grommet
} from 'grommet'
import { grommet } from 'grommet/themes'
import { deepMerge } from 'grommet/utils'


// STYLES
import css from '@emotion/css'


export const feed = deepMerge(grommet, {
  global: {
    colors: {
      // primaries
      yellow: '#FFFA21',
      orange: '#E8901E',
      red: '#FF2E3D',
      purple: '#7A2EE8',
      cyan: '#2EB8FF',
      // pastel
      yellowPastel: '#FBFFBC',
      orangePastel: '#E8D0AB',
      redPastel: '#FFCAC8',
      purplePastel: '#D3BBE8',
      cyanPastel: '#C8E7FF',
      // dark
      yellowDark: '#373B21',
      orangeDark: '#241E14',
      redDark: '#3B2524',
      purpleDark: '#1E1624',
      cyanDark: '#242F3B',
      // neutrals
      light: '#ECEFFF',
      gray1: '#98A1AD',
      gray2: '#636870',
      gray3: '#393E47',
      dark: '#16181D'
    }
  }
})

const Theme = ({ children }) => (
  <Grommet
    full
    cssVars
    theme={feed}
    css={
      css`background: none;`
    }
  >
    { children }
  </Grommet>
)

export default Theme