import { useMutation, useQuery, useQueryClient } from "react-query";
import { createReasonTranslation, getReasonsTranslation } from ".";
import { IReasonTranslationList, IReasonTranslationResponse } from "./types";
import { message } from "antd";

export const useGetReasonsTranslationQuery = () => {
  return useQuery<IReasonTranslationResponse, any, IReasonTranslationList>(
    "reasons/translation",
    getReasonsTranslation,
    {
      select: (data) => data.data,
    }
  );
};

export const useCreateReasonTranslationMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(createReasonTranslation, {
    onSuccess: () => {
      queryClient.invalidateQueries("reasons/translation");
      message.success("Успешно добавлено");
    },
    onError: () => {
      message.error("Произошла ошибка во время добавление");
    },
  });
};
