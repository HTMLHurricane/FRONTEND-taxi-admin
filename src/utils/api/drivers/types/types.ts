export interface IDriverTypeListResponse {
  status: string;
  message: string;
  data: IDriverTypeList;
}

export interface IDriverTypeList {
  driver_types: IDriverType[];
}

export interface IDriverType {
  code: string;
  name: string;
  id: string;
}
