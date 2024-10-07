import { axiosInstance } from '@/utils/config/axiosInstance'

export async function getLanguages() {
  try {
    const res = await axiosInstance.get<any>('superadmin/language/list')
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Произошла ошибка при загрузке языков. Попробуйте еще раз')
  }
}
