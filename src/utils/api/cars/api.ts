import { useMutation, useQuery, useQueryClient } from "react-query";
import { message } from "antd";
import { IVehicleList, IVehicleListResponse } from "./types";
import { getVehicles, createVehicle, deleteVehicle, updateVehicle } from ".";

export const useGetVehiclesQuery = () => {
  return useQuery<IVehicleListResponse, any, IVehicleList>("car", getVehicles, {
    select: (data) => data.data,
  });
};

export const useCreateVehicleMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(createVehicle, {
    onSuccess: () => {
      queryClient.invalidateQueries("car");
      message.success("Успешно добавлено");
    },
    onError: () => {
      message.error("Произошла ошибка во время добавление");
    },
  });
};

export const useDeleteVehicleMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteVehicle, {
    onSuccess: () => {
      queryClient.invalidateQueries("car");
      message.success("Успешно удалено");
    },
    onError: () => {
      message.error("Произошла ошибка во время удаления");
    },
  });
};

export const useUpdateVehicleMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(updateVehicle, {
    onSuccess: () => {
      queryClient.invalidateQueries("car");
      message.success("Успешно изменено");
    },
    onError: () => {
      message.error("Произошла ошибка во время редактирования");
    },
  });
};
