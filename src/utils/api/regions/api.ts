import { useMutation, useQuery, useQueryClient } from "react-query";
import { createRegion, deleteRegion, getRegions } from ".";
import { message } from "antd";
import { IRegionList, IRegionListResponse } from "./types";

export const useGetRegionsQuery = () => {
  return useQuery<IRegionListResponse, any, IRegionList>("regions", getRegions, {
    select: (data) => data.data,
  });
};

export const useCreateRegionMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(createRegion, {
    onSuccess: () => {
      queryClient.invalidateQueries("regions");
      message.success("Успешно добавлено");
    },
    onError: () => {
      message.error("Произошла ошибка во время добавление");
    },
  });
};

export const useDeleteRegionMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteRegion, {
    onSuccess: () => {
      queryClient.invalidateQueries("regions");
      message.success("Успешно удалено");
    },
    onError: () => {
      message.error("Произошла ошибка во время удаления");
    },
  });
};
