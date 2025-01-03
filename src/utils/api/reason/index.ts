import { CreateFunction, ReadFunction } from "@/utils/config/crud";
import { IReason, IReasonResponse } from "./types";

export function createReasons(body: Omit<IReason, "id">) {
  return CreateFunction("superadmin/ride/cancel/reason/", body);
}

export function getReasons() {
  return ReadFunction<IReasonResponse>("superadmin/ride/cancel/reason/list/");
}
