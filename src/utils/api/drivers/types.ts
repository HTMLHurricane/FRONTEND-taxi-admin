export interface IDriverListResponse {
  status:  string;
  message: string;
  data:    IDriverList;
}

export interface IDriverList {
  driver_vehicles: IDriver[];
}

export interface IDriver {
  user:           IUser;
  vehicle:        IDriverVehicle;
  color:          IColor;
  vehicle_number: string;
  id:             string;  // fake. if we remove this field, crud module will ask for id
}

export interface IColor {
  id:   string;
  name: string;
}

export interface IUser {
  id:           string;
  phone_number: string;
  profile:      IProfile;
}

export interface IProfile {
  id:        string;
  full_name: string;
  picture:   string;
}

export interface IDriverVehicle {
  id:           string;
  name:         string;
  quantity:     number;
  image:        string;
  vehicle_type: string;
}
