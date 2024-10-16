export interface IDriverListResponse {
  status:  string;
  message: string;
  data:    IDriverList;
}

export interface IDriverList {
  drivers: IDriver[];
}

export interface IDriver {
  id:               string;
  user:             User;
  vehicle:          Vehicle;
  color:            IColor;
  vehicle_number:   string;
  owner:            string;
  owner_address:    string;
  issue_date:       Date;
  manufacture_year: string;
  front_image_tp:   string;
  back_image_tp:    string;
}


export interface User {
  id:           string;
  phone_number: string;
  profile:      Profile;
}

export interface Profile {
  id:        string;
  full_name: string;
  picture:   string;
}

export interface Vehicle {
  id:           string;
  name:         string;
  quantity:     number;
  image:        string;
  vehicle_type: string;
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
