export interface ILanguageListResponse {
  status: string;
  message: string;
  data: ILanguageList;
}

export interface ILanguageList {
  languages: ILanguage[];
}

export interface ILanguage {
  id: string;
  name: string;
  code: string;
}
