import { DeleteFunction, ReadFunction, UpdateFunction } from "@/utils/config/crud";
import { IDriverListResponse } from "./types";

export function getDrivers() {
  return ReadFunction<IDriverListResponse>("superadmin/driver/list/");
}

export function updateDriver(body: any) {
  return UpdateFunction(`superadmin/driver/${body.id}/patch/`, body);
}

export function deleteDriver(id: string) {
  return DeleteFunction(`superadmin/driver/${id}/`);
}
