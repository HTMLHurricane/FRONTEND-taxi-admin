export interface IReasonResponse {
  status: string;
  message: string;
  data: IReasonsList;
}

export interface IReasonsList {
  reason_cancels: IReason[];
}

export interface IReason {
  id: string;
  txt: string;
}
