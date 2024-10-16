export interface ILoginCredentials {
  phone_number: string
  password: string
}

export interface ILoginResponseData {
  status: string
  message: string
  data: ILoginResponse
}

export interface ILoginResponse {
  tokens: Tokens
  fully_registered: boolean
  status: string
}

export interface Tokens {
  access: string
  refresh: string
}

export interface IRefreshTokensDataResponse {
  status:  string;
  message: string;
  data:    IRefreshTokensData;
}

export interface IRefreshTokensData {
  token: Token;
}

export interface Token {
  access: string;
}
