import { useMutation, useQuery, useQueryClient } from "react-query";
import { message } from "antd";
import { IVehicleColorList, IVehicleColorListResponse } from "./types";
import { getVehicleColors, createVehicleColor, deleteVehicleColor, updateVehicleColor } from ".";

export const useGetVehicleColorsQuery = () => {
  return useQuery<IVehicleColorListResponse, any, IVehicleColorList>("car-color", getVehicleColors, {
    select: (data) => data.data,
  });
};

export const useCreateVehicleColorMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(createVehicleColor, {
    onSuccess: () => {
      queryClient.invalidateQueries("car-color");
      message.success("Успешно добавлено");
    },
    onError: () => {
      message.error("Произошла ошибка во время добавление");
    },
  });
};

export const useDeleteVehicleColorMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteVehicleColor, {
    onSuccess: () => {
      queryClient.invalidateQueries("car-color");
      message.success("Успешно удалено");
    },
    onError: () => {
      message.error("Произошла ошибка во время удаления");
    },
  });
};

export const useUpdateVehicleColorMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(updateVehicleColor, {
    onSuccess: () => {
      queryClient.invalidateQueries("car-color");
      message.success("Успешно изменено");
    },
    onError: () => {
      message.error("Произошла ошибка во время редактирования");
    },
  });
};
