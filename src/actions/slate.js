
export const SLATE_CHANGE = 'SLATE_CHANGE'
export const SLATE_SUBMIT_FAIL = 'SLATE_SUBMIT_FAIL'
export const SLATE_SUBMIT_SUCCESS = 'SLATE_SUBMIT_SUCCESS'

export const SLATE_ACTIVE = 'SLATE_ACTIVE'

export function change (payload) {
  return {
    type: SLATE_CHANGE,
    payload
  }
}

export function submitSuccess (payload) {
  return {
    type: SLATE_SUBMIT_SUCCESS,
    payload
  }
}

export function submitFail (payload) {
  return {
    type: SLATE_SUBMIT_FAIL,
    payload
  }
}

export function activateEditor (payload) {
  return {
    type: SLATE_ACTIVE,
    payload
  }
}
