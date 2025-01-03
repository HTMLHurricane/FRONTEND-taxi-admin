import { ILanguage } from "../../language/types";
import { IReason } from "../types";

export interface IReasonTranslationResponse {
  status: string;
  message: string;
  data: IReasonTranslationList;
}

export interface IReasonTranslationList {
  reason_cancel_translations: IReasonTranslation[];
}

export interface IReasonTranslation {
  id: string;
  reason_cancel: IReason;
  language: ILanguage;
  translation: string;
}
