import { IColor } from "../../drivers/types";
import { IVehicle } from "../types";

export interface IColorAssignListResponse {
  status:  string;
  message: string;
  data:    IColorAssignList;
}

export interface IColorAssignList {
  vehicle_colors: IColorAssign[];
}

export interface IColorAssign {
  vehicle: IVehicle;
  color:   IColor;
  image:   string;
  id:      string;
}
