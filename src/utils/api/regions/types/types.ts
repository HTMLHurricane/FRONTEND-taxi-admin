export interface IRegionTypeListResponse {
  status: string;
  message: string;
  data: IRegionTypeList;
}

export interface IRegionTypeList {
  locality_types: IRegionType[];
}

export interface IRegionType {
  code: string;
  name: string;
  id: string;
}
