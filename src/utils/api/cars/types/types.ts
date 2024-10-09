export interface ICarTypeListResponse {
  status: string;
  message: string;
  data: ICarTypeList;
}

export interface ICarTypeList {
  vehicle_types: VehicleType[];
}

export interface VehicleType {
  code: string;
  name: string;
  id: string;
}
