import {
  CreateFunction,
  DeleteFunction,
  ReadFunction,
  UpdateFunction,
} from "@/utils/config/crud";
import { IRegion, IRegionListResponse } from "./types";

export function createRegion(body: Omit<IRegion, "id">) {
  return CreateFunction("superadmin/locality/", body);
}

export function getRegions() {
  return ReadFunction<IRegionListResponse>("superadmin/locality/list/");
}


export function updateRegion(body: any) {
  return UpdateFunction(`superadmin/locality/${body.id}/patch`, body);
}

export function deleteRegion(id: string) {
  return DeleteFunction(`superadmin/locality/${id}/`);
}
