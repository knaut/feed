
export const EDITOR_CHANGE = 'EDITOR_CHANGE';
export const EDITOR_SUBMIT_FAIL = 'EDITOR_SUBMIT_FAIL';
export const EDITOR_SUBMIT_SUCCESS = 'EDITOR_SUBMIT_SUCCESS';

export const EDITOR_ACTIVE = 'EDITOR_ACTIVE';

export function change(payload) {
  return {
    type: EDITOR_CHANGE,
    payload
  }
}

export function submitSuccess(payload) {
  return {
    type: EDITOR_SUBMIT_SUCCESS,
    payload
  }
}

export function submitFail(payload) {
  return {
    type: EDITOR_SUBMIT_FAIL,
    payload
  }
}

export function activateEditor(payload) {
  return {
    type: EDITOR_ACTIVE,
    payload
  }
}