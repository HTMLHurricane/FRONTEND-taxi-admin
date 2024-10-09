import { CreateFunction, DeleteFunction, ReadFunction, UpdateFunction } from "@/utils/config/crud";
import { IVehicleColor, IVehicleColorListResponse } from "./types";

export function createVehicleColor(body: Omit<IVehicleColor, "id">) {
  return CreateFunction("superadmin/vehicle/color/", body);
}

export function getVehicleColors() {
  return ReadFunction<IVehicleColorListResponse>("superadmin/vehicle/color/list/");
}

export function updateVehicleColor(body: any) {
  return UpdateFunction(`superadmin/vehicle/color/${body.id}/patch/`, body);
}

export function deleteVehicleColor(id: string) {
  return DeleteFunction(`superadmin/vehicle/color/${id}/`);
}

