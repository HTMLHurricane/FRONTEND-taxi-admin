import {
  CreateFunction,
  DeleteFunction,
  ReadFunction,
  UpdateFunction,
} from "@/utils/config/crud";

export function createDriver(body: any) {
  return CreateFunction("superadmin/driver/", body);
}

export function getDrivers() {
  return ReadFunction<any>("superadmin/driver/list/");
}

export function updateDriver(body: any) {
  return UpdateFunction(`superadmin/driver/${body.id}/patch`, body);
}

export function deleteDriver(id: string) {
  return DeleteFunction(`superadmin/driver/${id}`);
}
