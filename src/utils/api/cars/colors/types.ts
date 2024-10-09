export interface IVehicleColorListResponse {
  status: string;
  message: string;
  data: IVehicleColorList;
}

export interface IVehicleColorList {
  colors: IVehicleColor[];
}

export interface IVehicleColor {
  id: string
  name: string
}