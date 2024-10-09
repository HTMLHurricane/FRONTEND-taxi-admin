import { useQuery, useQueryClient, useMutation } from "react-query";
import { getDrivers, createDriver } from ".";
import { message } from "antd";

export const useGetDriversQuery = () => {
  return useQuery<any, any, any>(
    "drivers",
    getDrivers,
    {
      select: (data) => data.data,
    }
  );
};

export const useCreateDriverMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(createDriver, {
    onSuccess: () => {
      queryClient.invalidateQueries("drivers");
      message.success("Успешно добавлено");
    },
    onError: () => {
      message.error("Произошла ошибка во время добавление");
    },
  });
};


export const useUpdateDriverMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(createDriver, {
    onSuccess: () => {
      queryClient.invalidateQueries("drivers");
    },
  });
};

export const useDeleteDriverMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(createDriver, {
    onSuccess: () => {
      queryClient.invalidateQueries("drivers");
    },
  });
};