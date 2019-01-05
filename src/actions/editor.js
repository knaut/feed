
export const EDITOR_SUBMIT = 'EDITOR_SUBMIT';
export const EDITOR_SUBMIT_FAIL = 'EDITOR_SUBMIT_FAIL';
export const EDITOR_SUBMIT_SUCCESS = 'EDITOR_SUBMIT_SUCCESS';

export function submit(payload) {
  return {
    type: EDITOR_SUBMIT,
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