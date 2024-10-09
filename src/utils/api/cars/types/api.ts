import { useQuery } from "react-query";
import { getCarTypes } from "./index";
import { ICarTypeListResponse, ICarTypeList } from "./types";

export const useGetCarTypesQuery = () => {
  return useQuery<ICarTypeListResponse, any, ICarTypeList>("car-types", getCarTypes, {
    select: (data) => data.data,
  });
};
