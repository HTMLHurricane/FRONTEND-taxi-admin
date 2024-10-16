import { useMutation, useQuery, useQueryClient } from "react-query";
import { message } from "antd";
import { IColorAssignList, IColorAssignListResponse } from "./types";
import { createColorAssign, deleteColorAssign, getColorsAssign, updateColorAssign } from ".";

export const useGetColorsAssignQuery = () => {
  return useQuery<IColorAssignListResponse, any, IColorAssignList>("color-assign", getColorsAssign, {
    select: (data) => data.data,
  });
};


export const useCreateColorAssignMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(createColorAssign, {
    onSuccess: () => {
      queryClient.invalidateQueries("color-assign");
      message.success("Успешно добавлено");
    },
    onError: () => {
      message.error("Произошла ошибка во время добавление");
    },
  });
};

export const useDeleteColorAssignMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteColorAssign, {
    onSuccess: () => {
      queryClient.invalidateQueries("color-assign");
      message.success("Успешно удалено");
    },
    onError: () => {
      message.error("Произошла ошибка во время удаления");
    },
  });
};

export const useUpdateColorAssignMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(updateColorAssign, {
    onSuccess: () => {
      queryClient.invalidateQueries("color-assign");
      message.success("Успешно изменено");
    },
    onError: () => {
      message.error("Произошла ошибка во время редактирования");
    },
  });
};
