import { ReadFunction } from "@/utils/config/crud";
import { IDriverTypeListResponse } from "./types";

export function getDriverTypes() {
  return ReadFunction<IDriverTypeListResponse>("superadmin/driver/type-list");
}
