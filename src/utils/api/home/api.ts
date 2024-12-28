import { useQuery } from "react-query";
import { getAllDaily, getAllMonthly, getDaily, getMonthly } from ".";
import { Params } from "./types";

export const useGetAllDailyQuery = (params: Params) => {
  return useQuery(["yearly", params], () => getAllDaily(params), {
    keepPreviousData: true,
    staleTime: 60000,
  });
};

export const useGetAllMonthQuery = (params: Params) => {
  return useQuery(["monthly", params], () => getAllMonthly(params), {
    keepPreviousData: true,
    staleTime: 60000,
  });
};

export const useGetDaily = (params: Params) => {
  return useQuery(["daily", params], () => getDaily(params), {
    keepPreviousData: true,
    staleTime: 60000,
  });
};

export const useGetMonthly = (params: Params) => {
  return useQuery(["daily", params], () => getMonthly(params), {
    keepPreviousData: true,
    staleTime: 60000,
  });
};
