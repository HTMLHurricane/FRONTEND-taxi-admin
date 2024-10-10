import { ReadFunction } from "@/utils/config/crud";
import { IRideTypeListResponse } from "./types";

export function getRideTypes() {
  return ReadFunction<IRideTypeListResponse>("superadmin/ride/type-list/");
}
