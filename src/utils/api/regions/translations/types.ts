export interface IRegionTranslationListResponse {
  status: string;
  message: string;
  data: IRegionTranslationList;
}

export interface IRegionTranslationList {
  locality_translations: IRegionTranslation[];
}

export interface IRegionTranslation {
  id: string;
  locality: IRegionTranslationLocality;
  language: IRegionTranslationLanguage;
  translation: string;
}

export interface IRegionTranslationLanguage {
  id: string;
  code: string;
  name: string;
}

export interface IRegionTranslationLocality {
  id: string;
  name: string;
  locality_type: string;
}

export interface IRegionTranslationCreateBody {
  locality_id: string;
  language_id: string;
  translation: string;
}
