// TYPES
export const LOADER_ON = 'LOADER_ON'
export const LOADER_FADEOUT = 'LOADER_FADEOUT'
export const LOADER_OFF = 'LOADER_OFF'

export function loaderOn (payload) {
  return {
    type: LOADER_ON,
    payload: true
  }
}

export function loaderOff (payload) {
  return {
    type: LOADER_OFF,
    payload: true
  }
}

export function loaderFadeout (payload) {
  return {
    type: LOADER_FADEOUT,
    payload: true
  }
}