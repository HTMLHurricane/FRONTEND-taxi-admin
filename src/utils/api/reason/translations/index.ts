import { CreateFunction, ReadFunction } from "@/utils/config/crud";
import { IReasonTranslation, IReasonTranslationResponse } from "./types";

export function createReasonTranslation(body: Omit<IReasonTranslation, "id">) {
  return CreateFunction("superadmin/ride/cancel/reason/translation/", body);
}

export function getReasonsTranslation() {
  return ReadFunction<IReasonTranslationResponse>(
    "superadmin/ride/cancel/reason/translation/list/"
  );
}
