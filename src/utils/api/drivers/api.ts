import { useQuery, useQueryClient, useMutation } from "react-query";
import { deleteDriver, getDrivers, updateDriver } from ".";
import { IDriverList, IDriverListResponse } from "./types";

export const useGetDriversQuery = () => {
  return useQuery<IDriverListResponse, any, IDriverList>("drivers", getDrivers, {
    select: (data) => data.data,
  });
};

export const useUpdateDriverMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(updateDriver, {
    onSuccess: () => {
      queryClient.invalidateQueries("drivers");
    },
  });
};

export const useDeleteDriverMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteDriver, {
    onSuccess: () => {
      queryClient.invalidateQueries("drivers");
    },
  });
};
