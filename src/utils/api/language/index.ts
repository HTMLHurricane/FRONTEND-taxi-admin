import {
  CreateFunction,
  ReadFunction,
  UpdateFunction,
  DeleteFunction,
} from "@/utils/config/crud";
import { ILanguage, ILanguageListResponse } from "./types";

export function createLanguage(body: Omit<ILanguage, "id">) {
  return CreateFunction("superadmin/language/", body);
}

export function getLanguages() {
  return ReadFunction<ILanguageListResponse>("superadmin/language/list/");
}

export function updateLanguage({ id, ...body }: ILanguage) {
  return UpdateFunction(`superadmin/language/${id}/patch/`, body);
}

export function deleteLanguage(id: string) {
  return DeleteFunction(`superadmin/language/${id}/`);
}
