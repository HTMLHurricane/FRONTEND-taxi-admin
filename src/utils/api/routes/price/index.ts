import { CreateFunction, DeleteFunction, ReadFunction, UpdateFunction } from "@/utils/config/crud";

export function createPrice(body: any) {
  return CreateFunction("superadmin/ride/price/", body);
}

export function getPrices() {
  return ReadFunction<any>("superadmin/ride/price/list/");
}

export function updatePrice({ id, ...body }: any) {
  return UpdateFunction(`superadmin/ride/price/${id}/patch/`, body);
}

export function deletePrice(id: string) {
  return DeleteFunction(`superadmin/ride/price/${id}`);
}
