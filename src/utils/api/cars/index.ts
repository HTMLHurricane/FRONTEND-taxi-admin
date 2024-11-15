import {
  CreateFunction,
  DeleteFunction,
  ReadFunction,
  UpdateFunction,
} from '@/utils/config/crud'
import { IVehicleListResponse } from './types'

export function createVehicle(body: FormData) {
  return CreateFunction('superadmin/vehicle/', body)
}

export function getVehicles() {
  return ReadFunction<IVehicleListResponse>(`superadmin/vehicle/list/`)
}

export function updateVehicle(body: FormData) {
  const id = body.get('id')
  return UpdateFunction(`superadmin/vehicle/${id}/patch/`, body)
}

export function deleteVehicle(id: string) {
  return DeleteFunction(`superadmin/vehicle/${id}/`)
}
