export interface IRideTypeListResponse {
  status: string;
  message: string;
  data: IRideTypeList;
}

export interface IRideTypeList {
  ride_types: IRideType[];
}

export enum IRideTypeCode {
  TAXI = "taxi",
  SPECIAL = "special",
}
export enum IRideTypeName {
  TAXI = "Taksi sapar",
  SPECIAL = "Arnawli sapar",
}

export interface IRideType {
  code: IRideTypeCode;
  name: IRideTypeName;
  id: string;
}
