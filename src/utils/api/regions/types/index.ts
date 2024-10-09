import { ReadFunction } from "@/utils/config/crud";
import { IRegionTypeListResponse } from "./types";

export function getRegionTypes() {
  return ReadFunction<IRegionTypeListResponse>("superadmin/locality/type-list/");
}
