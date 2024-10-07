import { axiosInstance } from '@/utils/config/axiosInstance'
import { ILoginCredentials, ILoginResponseData } from './types'

export async function login(credentials: ILoginCredentials) {
  try {
    const res = await axiosInstance.post<ILoginResponseData>(
      'superadmin/auth/',
      credentials
    )
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Произошла ошибка при входе. Попробуйте еще раз')
  }
}

export async function checkUser() {
  try {
    const res = await axiosInstance.get<any>('users/me/')
    return res.data
  } catch (error) {
    console.error(`Произошла ошибка при проверке пользователя: ${error}`)
    throw new Error('Произошла ошибка при проверке пользователя.')
  }
}
