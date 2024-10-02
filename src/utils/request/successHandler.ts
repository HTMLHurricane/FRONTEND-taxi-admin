import { token } from '@/utils/api/auth'
import { ILoginResponseData } from '@/utils/api/auth/auth.types'
import { notification } from 'antd'
import { AxiosResponse } from 'axios'

export const successHandler = (response: AxiosResponse<ILoginResponseData>) => {
  const { data } = response

  if (data && data.data && data.data.tokens && data.data.tokens.access) {
    // Set the access token
    // Assuming you have a token utility, you might need to import it
    // import { token } from './tokenUtils';
    token.set(data.data.tokens.access)

    // Show success notification
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
    // Handle unexpected response structure
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
