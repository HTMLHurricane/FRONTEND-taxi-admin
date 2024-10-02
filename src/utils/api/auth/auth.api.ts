import { useMutation } from 'react-query'
import { login } from '.'
import { TOKEN } from '@/utils/config/token'
import { ILoginCredentials, ILoginResponseData } from './auth.types'

interface IError {
  message: string
}

export const useLoginMutation = () => {
  return useMutation<ILoginResponseData, IError, ILoginCredentials>(login, {
    onSuccess: (data) => {
      TOKEN.set(data.data.tokens.access)
    },
    onError: (error) => {
      console.log(error)
    },
  })
}

// export const useCheckUser = () => {
//   return useQuery<ICheckUserData, any>(['users'], checkUser)
// }
