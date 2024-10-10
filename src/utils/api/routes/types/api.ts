import { useQuery } from "react-query";
import { getRideTypes } from "./index";
import { IRideTypeListResponse, IRideTypeList } from "./types";

export const useGetRideTypesQuery = () => {
  return useQuery<IRideTypeListResponse, any, IRideTypeList>("ride-types", getRideTypes, {
    select: (data) => data.data,
  });
};
