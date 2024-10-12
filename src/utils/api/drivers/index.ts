import { DeleteFunction, ReadFunction, UpdateFunction } from "@/utils/config/crud";
import { IDriverListResponse } from "./types";

export function getDrivers() {
  return ReadFunction<IDriverListResponse>("superadmin/driver/vehicle/list/");
}

export function updateDriver(body: any) {
  return UpdateFunction(`superadmin/driver/vehicle/${body.id}/patch/`, body);
}

export function deleteDriver(id: string) {
  return DeleteFunction(`superadmin/driver/vehicle/${id}`);
}
