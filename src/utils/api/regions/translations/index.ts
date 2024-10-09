import { CreateFunction, DeleteFunction, ReadFunction, UpdateFunction } from "@/utils/config/crud";
import { IRegionTranslationCreateBody, IRegionTranslationListResponse } from "./types";

export function createRegionTranslation(body: IRegionTranslationCreateBody) {
  return CreateFunction("superadmin/locality/translation/", body);
}

export function getRegionTranslations() {
  return ReadFunction<IRegionTranslationListResponse>("superadmin/locality/translation/list/");
}

export function updateRegionTranslation(body: any) {
  return UpdateFunction(`superadmin/locality/translation/${body.id}/patch/`, body);
}

export function deleteRegionTranslation(id: string) {
  return DeleteFunction(`superadmin/locality/translation/${id}/`);
}
