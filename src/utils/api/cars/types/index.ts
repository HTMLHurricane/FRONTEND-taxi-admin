import { ReadFunction } from "@/utils/config/crud";
import { ICarTypeListResponse } from "./types";

export function getCarTypes() {
  return ReadFunction<ICarTypeListResponse>("superadmin/vehicle/type-list/");
}
