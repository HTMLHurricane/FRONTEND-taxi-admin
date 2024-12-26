export interface UsersResponseData {
  status: string;
  message: string;
  data: UsersResponse;
}
export interface UsersResponse {
  rides: Users;
}
export interface Users {
  count: number;
  next: string | null;
  previous: string | null;
  results: User[];
}
export interface User {
  id: string;
  phone_number: string;
  profile: {
    full_name: string;
  };
}
