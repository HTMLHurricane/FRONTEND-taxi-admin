import { useQuery, useQueryClient, useMutation } from "react-query";
import { deleteDriver, getDrivers, updateDriver } from ".";
import { IDriverList, IDriverListResponse } from "./types";
import { message } from "antd";

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
    onError: () => {
      message.error("Произошла ошибка во время редактирования");
    },
  });
};

export const useDeleteDriverMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteDriver, {
    onSuccess: () => {
      queryClient.invalidateQueries("drivers");
    },
    onError: () => {
      message.error("Произошла ошибка во время удаления");
    },
  });
};
