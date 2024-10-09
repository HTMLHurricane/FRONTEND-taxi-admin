export interface IVehicleListResponse {
  status: string;
  message: string;
  data: IVehicleList;
}

export interface IVehicleList {
  vehicles: IVehicle[];
}

export interface IVehicle {
  id: string;
  image: string;
  name: string;
  quantity: number;
  vehicle_type: string;
}
