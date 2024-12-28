import { axiosInstance } from "@/utils/config/axiosInstance";
import {
  DailyStatisticResponseData,
  Params,
  StatisticResponseData,
} from "./types";

export async function getAllDaily(
  params: Params
): Promise<StatisticResponseData> {
  try {
    const response = await axiosInstance.get<StatisticResponseData>(
      "superadmin/statistics/all-daily/",
      {
        params,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching daily data:", error);
    throw new Error("Failed to fetch daily data");
  }
}

export async function getAllMonthly(
  params: Params
): Promise<StatisticResponseData> {
  try {
    const response = await axiosInstance.get<StatisticResponseData>(
      "superadmin/statistics/all-monthly/",
      { params }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching monthly data:", error);
    throw new Error("Failed to fetch monthly data");
  }
}

export async function getMonthly(
  params: Params
): Promise<DailyStatisticResponseData> {
  try {
    const response = await axiosInstance.get<DailyStatisticResponseData>(
      "superadmin/statistics/monthly/",
      { params }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching monthly data:", error);
    throw new Error("Failed to fetch monthly data");
  }
}

export async function getDaily(
  params: Params
): Promise<DailyStatisticResponseData> {
  try {
    const response = await axiosInstance.get<DailyStatisticResponseData>(
      "superadmin/statistics/daily/",
      { params }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching monthly data:", error);
    throw new Error("Failed to fetch monthly data");
  }
}
