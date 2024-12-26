import { UsersResponseData } from "./types";
import { axiosInstance } from "@/utils/config/axiosInstance";

export async function getUsers(
  page: number,
  pageSize: number
): Promise<UsersResponseData> {
  try {
    const response = await axiosInstance.get<UsersResponseData>(
      "superadmin/statistics/user/list/",
      {
        params: {
          page,
          page_size: pageSize,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Failed to fetch users");
  }
}
