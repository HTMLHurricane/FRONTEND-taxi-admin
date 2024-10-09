import { CreateFunction, DeleteFunction, ReadFunction, UpdateFunction } from "@/utils/config/crud";
import { IVehicle, IVehicleListResponse } from "./types";

export function createVehicle(body: Omit<IVehicle, "id">) {
  return CreateFunction("superadmin/vehicle/", body);
}

export function getVehicles() {
  return ReadFunction<IVehicleListResponse>("superadmin/vehicle/list/");
}

export function updateVehicle(body: any) {
  return UpdateFunction(`superadmin/vehicle/${body.id}/patch/`, body);
}

export function deleteVehicle(id: string) {
  return DeleteFunction(`superadmin/vehicle/${id}/`);
}

