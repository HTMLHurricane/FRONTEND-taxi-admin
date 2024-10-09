import { useQuery } from "react-query";
import { getRegionTypes } from "./index";
import { IRegionTypeList, IRegionTypeListResponse } from "./types";

export const useGetRegionTypesQuery = () => {
  return useQuery<IRegionTypeListResponse, any, IRegionTypeList>("region-types", getRegionTypes, {
    select: (data) => data.data,
  });
};
