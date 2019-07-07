
export const POST_DELETE_FAIL = 'POST_DELETE_FAIL'
export const POST_DELETE_SUCCESS = 'POST_DELETE_SUCCESS'

export function deleteSuccess (payload) {
  return {
    type: POST_DELETE_SUCCESS,
    payload
  }
}

export function deleteFail (payload) {
  return {
    type: POST_DELETE_FAIL,
    payload
  }
}
