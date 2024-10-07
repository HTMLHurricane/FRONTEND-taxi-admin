import { create } from 'zustand'
import { TOKEN } from '@/utils/config/token'
import { IAuthState } from './types'

const useAuthStore = create<IAuthState>((set) => ({
  token: TOKEN.get(),
  isLoggedIn: !!TOKEN.get(),

  login: (newToken: string) => {
    TOKEN.set(newToken)
    set({ token: newToken, isLoggedIn: true })
  },

  logout: () => {
    TOKEN.remove()
    set({ token: null, isLoggedIn: false })
  },
}))

export default useAuthStore
