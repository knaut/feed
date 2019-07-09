// TYPES
export const LOADER_ON = 'LOADER_ON'
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
    payload: false
  }
}