import { POPULATE_PROFILE } from '../types/users'

const initialState = { profile: null }

export default (state = initialState, action) => {
  switch (action.type) {
    case POPULATE_PROFILE:
      return {
        ...state,
        profile: action.payload,
      }

    default:
      return state
  }
}
