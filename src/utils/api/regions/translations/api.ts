import { useMutation, useQuery, useQueryClient } from "react-query";
import { message } from "antd";
import { IRegionTranslationList, IRegionTranslationListResponse } from "./types";
import { getRegionTranslations, createRegionTranslation, deleteRegionTranslation, updateRegionTranslation } from ".";

export const useGetRegionTranslationsQuery = () => {
  return useQuery<IRegionTranslationListResponse, any, IRegionTranslationList>(
    "region-translations",
    getRegionTranslations,
    {
      select: (data) => data.data,
    }
  );
};

export const useCreateRegionTranslationMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(createRegionTranslation, {
    onSuccess: () => {
      queryClient.invalidateQueries("region-translations");
      message.success("Успешно добавлено");
    },
    onError: () => {
      message.error("Произошла ошибка во время добавление");
    },
  });
};

export const useDeleteRegionTranslationMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteRegionTranslation, {
    onSuccess: () => {
      queryClient.invalidateQueries("region-translations");
      message.success("Успешно удалено");
    },
    onError: () => {
      message.error("Произошла ошибка во время удаления");
    },
  });
};

export const useUpdateRegionTranslationMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(updateRegionTranslation, {
    onSuccess: () => {
      queryClient.invalidateQueries("region-translations");
      message.success("Успешно изменено");
    },
    onError: () => {
      message.error("Произошла ошибка во время редактирования");
    },
  });
};
