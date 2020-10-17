import { POPULATE_PROFILE } from '../types/users'

const initialState = null

export default (state = initialState, action) => {
  switch (action.type) {
    case POPULATE_PROFILE:
      return action.payload

    default:
      return state
  }
}
