import { CreateFunction } from "@/utils/config/crud";
import { ICreateAccountBody, ICreateProfileAccount, IVehicleForAccountBody } from "./types";

export function createAccount(body: Omit<ICreateAccountBody, "code">) {
  return CreateFunction("superadmin/account/", body);
}

export function verifyAccount(body: ICreateAccountBody) {
  return CreateFunction("superadmin/account/verify/", body);
}

export function profileAccount(body: ICreateProfileAccount) {
  return CreateFunction("superadmin/account/profile/", body);
}

export function assignVehicleForAccount(body: IVehicleForAccountBody) {
  return CreateFunction("superadmin/driver/vehicle/", body);
}
