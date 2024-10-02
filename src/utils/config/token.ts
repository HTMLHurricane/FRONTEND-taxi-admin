export const ACCESS_TOKEN_NAME = 'access_token'

export function setToken(tokenName: string, tokenValue: string) {
  localStorage.setItem(tokenName, tokenValue)
}
export function getToken(tokenName: string) {
  const result = localStorage.getItem(tokenName)
  return result
}
export function deleteToken(tokenName: string) {
  window.localStorage.removeItem(tokenName)
  return true
}

export const TOKEN = {
  get: () => getToken(ACCESS_TOKEN_NAME),
  set: (token: string) => setToken(ACCESS_TOKEN_NAME, token),
  remove: () => deleteToken(ACCESS_TOKEN_NAME),
}
