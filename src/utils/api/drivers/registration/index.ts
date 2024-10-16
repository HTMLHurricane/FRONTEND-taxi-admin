import { CreateFunction } from '@/utils/config/crud'
import { IVerifyAccountBody } from './types'

export function createAccount(body: FormData) {
  return CreateFunction('superadmin/driver/', body)
}

export function verifyAccount(body: IVerifyAccountBody) {
  return CreateFunction('superadmin/driver/verify/', body)
}
