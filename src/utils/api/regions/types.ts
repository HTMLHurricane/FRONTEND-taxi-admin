export interface IRegionListResponse {
  status: string;
  message: string;
  data: IRegionList;
}

export interface IRegionList {
  localities: IRegion[];
}

export interface IRegion {
  id: string;
  name: string;
  locality_type: string;
}
