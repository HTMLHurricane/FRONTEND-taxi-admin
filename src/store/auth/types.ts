export interface IAuthState {
  token: string | null
  isLoggedIn: boolean
  login: (newToken: string) => void
  logout: () => void
}
