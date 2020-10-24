import { POPULATE_PROFILE } from '../types/users'

export const acPopulateProfile = (profile) => ({
  type: POPULATE_PROFILE,
  payload: profile,
})
