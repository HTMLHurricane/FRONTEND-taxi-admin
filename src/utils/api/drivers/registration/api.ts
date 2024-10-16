import { message } from 'antd'
import { useMutation } from 'react-query'
import { createAccount, verifyAccount } from '.'
import { useNavigate } from 'react-router-dom'

export const useCreateDriverMutation = () => {
  return useMutation(createAccount, {
    onSuccess: () => {
      message.warning('Подтвердите данные водителя через SMS код')
    },
    onError: () => {
      message.error('Произошла ошибка во время добавления')
    },
  })
}

export const useVerifyDriverMutation = () => {
  const navigate = useNavigate()
  return useMutation(verifyAccount, {
    onSuccess: () => {
      message.success('Водитель успешно создан')
      navigate('/drivers')
    },
    onError: () => {
      message.error('Произошла ошибка во время подтверждения')
    },
  })
}
