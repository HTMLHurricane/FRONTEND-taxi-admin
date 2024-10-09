import { useQuery } from "react-query";
import { getCars } from ".";

// export const useCreateDriverMutation = () => {
//   const queryClient = useQueryClient();

//   return useMutation(createDriver, {
//     onSuccess: () => {
//       queryClient.invalidateQueries("drivers");
//     },
//   });
// };

export const useGetCarsQuery = () => {
  return useQuery(["cars"], getCars);
};

// export const useUpdateDriverMutation = () => {
//   const queryClient = useQueryClient();

//   return useMutation(createDriver, {
//     onSuccess: () => {
//       queryClient.invalidateQueries("drivers");
//     },
//   });
// };

// export const useDeleteDriverMutation = () => {
//   const queryClient = useQueryClient();

//   return useMutation(createDriver, {
//     onSuccess: () => {
//       queryClient.invalidateQueries("drivers");
//     },
//   });
// };
