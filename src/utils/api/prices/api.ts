import { message } from "antd";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { createPrice, getPrices } from ".";

export const useGetPricesQuery = () => {
  return useQuery<any, any, any>("prices", getPrices, {
    select: (data) => data.data,
  });
};

export const useCreatePriceMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(createPrice, {
    onSuccess: () => {
      queryClient.invalidateQueries("prices");
      message.success("Успешно добавлено");
    },
    onError: () => {
      message.error("Произошла ошибка во время добавление");
    },
  });
};
