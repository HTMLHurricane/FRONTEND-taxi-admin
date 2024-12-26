import { useQuery } from "react-query";
import { getUsers } from ".";

export const useGetUsersQuery = (page: number, pageSize: number) => {
  return useQuery(["users", page, pageSize], () => getUsers(page, pageSize), {
    keepPreviousData: true,
  });
};
