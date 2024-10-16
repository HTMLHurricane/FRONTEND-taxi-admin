import { CreateFunction, DeleteFunction, ReadFunction, UpdateFunction } from '@/utils/config/crud'
import { IColorAssignListResponse } from './types'

export function createColorAssign(body: FormData) {
  return CreateFunction('superadmin/vehicle/color/assign/', body)
}

export function getColorsAssign() {
  return ReadFunction<IColorAssignListResponse>('superadmin/vehicle/color/assign/list/')
}

export function updateColorAssign(body: any) {
  const formData = new FormData()
  formData.append('image', body.image)
  return UpdateFunction(`superadmin/vehicle/color/assign/${body.id}/patch/`, formData)
}

export function deleteColorAssign(id: string) {
  return DeleteFunction(`superadmin/vehicle/color/assign/${id}/`)
}
