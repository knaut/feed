
// export const INPUT_CHANGE = 'INPUT_CHANGE';
// export const INPUT_SUBMIT = 'INPUT_SUBMIT';
export const EDITOR_SUBMIT = 'EDITOR_SUBMIT';

export function submit(payload) {
  return {
    type: EDITOR_SUBMIT,
    payload
  }
}