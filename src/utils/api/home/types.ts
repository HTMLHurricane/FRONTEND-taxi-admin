export interface StatisticResponseData {
  status: string;
  message: string;
  data: StatisticResponse[];
}

export interface DailyStatisticResponseData {
  status: string;
  message: string;
  data: Direction[];
}

export interface StatisticResponse {
  date: string;
  statistics: Statistics;
}

export interface Direction {
  direction: {
    from_locality: {
      name: string;
    };
    to_locality: {
      name: string;
    };
    vehicle: {
      name: string;
      quantity: number;
    };
  };
  statistics: Statistics;
}

export interface Statistics {
  total: number;
  total_quantity: number;
  total_price: string;
  our_income: string;
}

export interface Params {
  date: string; // Изменили на dayjs.Dayjs
  type: "forward" | "backward";
  status: "completed" | "canceled";
  ride_type: "taxi" | "special";
}
