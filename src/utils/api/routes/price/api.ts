import { useMutation, useQuery, useQueryClient } from "react-query";
import { createPrice, deletePrice, getPrices, updatePrice } from ".";
import { message } from "antd";
import { IPriceList, IPriceListResponse } from "./types";

export const useGetPricesQuery = () => {
  return useQuery<IPriceListResponse, any, IPriceList>("price", getPrices, {
    select: (data) => data.data,
  });
};

export const useCreatePriceMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(createPrice, {
    onSuccess: () => {
      queryClient.invalidateQueries("price");
      message.success("Успешно добавлено");
    },
    onError: () => {
      message.error("Произошла ошибка во время добавление");
    },
  });
};

export const useDeletePriceMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(deletePrice, {
    onSuccess: () => {
      queryClient.invalidateQueries("price");
      message.success("Успешно удалено");
    },
    onError: () => {
      message.error("Произошла ошибка во время удаления");
    },
  });
};

export const useUpdatePriceMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(updatePrice, {
    onSuccess: () => {
      queryClient.invalidateQueries("price");
      message.success("Успешно изменено");
    },
    onError: () => {
      message.error("Произошла ошибка во время редактирования");
    },
  });
};
