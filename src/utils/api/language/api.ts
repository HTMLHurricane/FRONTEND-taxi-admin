import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  createLanguage,
  deleteLanguage,
  getLanguages,
  updateLanguage,
} from ".";
import { message } from "antd";
import { ILanguageList, ILanguageListResponse } from "./types";

export const useGetLanguagesQuery = () => {
  return useQuery<ILanguageListResponse, any, ILanguageList>(
    "languages",
    getLanguages,
    {
      select: (data) => data.data,
    }
  );
};

export const useCreateLanguageMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(createLanguage, {
    onSuccess: () => {
      queryClient.invalidateQueries("languages");
      message.success("Успешно добавлено");
    },
    onError: () => {
      message.error("Произошла ошибка во время добавление");
    },
  });
};

export const useUpdateLanguageMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(updateLanguage, {
    onSuccess: () => {
      queryClient.invalidateQueries("languages");
    },
  });
};

export const useDeleteLanguageMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteLanguage, {
    onSuccess: () => {
      queryClient.invalidateQueries("languages");
    },
  });
};
