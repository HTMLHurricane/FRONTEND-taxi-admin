import { useMutation, useQuery, useQueryClient } from "react-query";
import { IReasonResponse, IReasonsList } from "./types";
import { createReasons, getReasons } from ".";
import { message } from "antd";

export const useGetReasonsQuery = () => {
  return useQuery<IReasonResponse, any, IReasonsList>("reasons", getReasons, {
    select: (data) => data.data,
  });
};

export const useCreateReasonMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(createReasons, {
    onSuccess: () => {
      queryClient.invalidateQueries("reasons");
      message.success("Успешно добавлено");
    },
    onError: () => {
      message.error("Произошла ошибка во время добавление");
    },
  });
};
