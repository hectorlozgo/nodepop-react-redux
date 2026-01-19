const BASE_USER_URL = '/api'
const BASE_ADVERT_URL = '/api/v1/adverts'

export const USER_ENDPOINTS = {
  SIGNUP: `${BASE_USER_URL}/auth/signup`,
  LOGIN: `${BASE_USER_URL}/auth/login`,
  AUTH: `${BASE_USER_URL}/auth/me`
}

export const ADVERT_ENDPOINT = {
  TAGS: `${BASE_ADVERT_URL}/tags`,
  ADVERT: `${BASE_ADVERT_URL}`,
  ADVERT_ID: (id: string) => `${BASE_ADVERT_URL}/${id}`
}
