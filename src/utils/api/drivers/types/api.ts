import { useQuery } from "react-query";
import { getDriverTypes } from "./index";
import { IDriverTypeList, IDriverTypeListResponse } from "./types";

export const useGetDriverTypesQuery = () => {
  return useQuery<IDriverTypeListResponse, any, IDriverTypeList>("driver-types", getDriverTypes, {
    select: (data) => data.data,
  });
};
