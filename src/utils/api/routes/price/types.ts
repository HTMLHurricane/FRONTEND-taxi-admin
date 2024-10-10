import { IVehicle } from "@/utils/api/cars/types";
import { IRegion } from "@/utils/api/regions/types";
import { IRideTypeCode } from "../types/types";

export interface IPriceListResponse {
  status: string;
  message: string;
  data: IPriceList;
}

export interface IPriceList {
  prices: IPrice[];
}

export interface IPrice {
  id: string;
  from_locality: IRegion;
  to_locality: IRegion;
  vehicle: IVehicle | null;
  unit_price: number | null;
  total_price: string | null;
  ride_type: IRideTypeCode;
}

export interface ISpecialFormBody {
  from_locality_id: string;
  to_locality_id: string;
  total_price: string;
  vehicle_id: string;
  id: string;
}
