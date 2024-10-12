export interface ICreateAccountBody {
  phone_number: string;
  driver_type: string;
  code: string;
}

export interface ICreateProfileAccount {
  driver_id: string;
  full_name: string;
}

export interface IVehicleForAccountBody {
  driver_id:      string;
  vehicle_id:     string;
  vehicle_number: string;
  color_id:       string;
}
