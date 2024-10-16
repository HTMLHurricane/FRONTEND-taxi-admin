import { useMutation } from 'react-query'
import { login } from '.'
import { ILoginCredentials, ILoginResponseData } from './types'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '@/store/auth/slice'

export const useLoginMutation = () => {
  const navigate = useNavigate()
  const loginToState = useAuthStore((state) => state.login)

  return useMutation<ILoginResponseData, any, ILoginCredentials>(login, {
    onSuccess: (data) => {
      message.success('Добро пожаловать')
      loginToState(data.data.tokens)
      navigate('/')
    },
    onError: (error) => {
      console.log(error)
    },
  })
}
