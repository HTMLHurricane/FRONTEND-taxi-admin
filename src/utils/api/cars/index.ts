import {
  CreateFunction,
  DeleteFunction,
  ReadFunction,
  UpdateFunction,
} from "@/utils/config/crud";

export function createCar(body: any) {
  return CreateFunction("superadmin/vehicle/", body);
}

export function getCars() {
  return ReadFunction("superadmin/vehicle/list/");
}

export function updateCar(body: any) {
  return UpdateFunction(`superadmin/vehicle/${body.id}/patch`, body);
}

export function deleteCar(id: number) {
  return DeleteFunction(`superadmin/vehicle/${id}`);
}
