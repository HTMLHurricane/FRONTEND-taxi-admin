import { ILoginResponseData } from '@/utils/api/auth/types'
import { notification } from 'antd'
import { AxiosResponse } from 'axios'
import { TOKEN } from '../config/token'

export const successHandler = (response: AxiosResponse<ILoginResponseData>) => {
  const { data } = response

  if (data && data.data && data.data.tokens && data.data.tokens.access) {
    TOKEN.set(data.data.tokens.access)

    notification.success({
      message: 'Success',
      description: data.message || 'Operation completed successfully.',
      duration: 3,
    })

    return {
      success: true,
      data: data.data,
      message: data.message,
    }
  } else {
    notification.error({
      message: 'Error',
      description: 'Unexpected response structure. Please try again.',
      duration: 5,
    })

    return {
      success: false,
      data: null,
      message: 'Unexpected response structure',
    }
  }
}
