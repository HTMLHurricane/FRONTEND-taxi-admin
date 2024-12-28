import { useGetAllMonthQuery } from "@/utils/api/home/api";
import { Params, StatisticResponse } from "@/utils/api/home/types";
import { Table, TableProps } from "antd";
import { FC } from "react";

interface Props {
  params: Params;
}

const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

export const YearStatistic: FC<Props> = ({ params }) => {
  const { data, isLoading } = useGetAllMonthQuery(params);
  function getMonthName(monthNumber: any) {
    if (monthNumber < 0) {
      monthNumber = 12 + monthNumber;
    }
    return months[monthNumber - 1];
  }
  const columns: TableProps<StatisticResponse>["columns"] = [
    {
      title: "Дата",
      key: "date",
      dataIndex: "date",
      render: (_, res) => <>{getMonthName(res?.date?.slice(5))}</>,
    },
    {
      title: "Количество выездов",
      key: "total",
      dataIndex: "statistics",
      render: (_, res) => <>{res.statistics.total}</>,
    },
    {
      title: "Количество пассажиров",
      key: "total_quantity",
      dataIndex: "statistics",
      render: (_, res) => <>{res.statistics.total_quantity}</>,
    },
    {
      title: "Общий доход",
      key: "total_price",
      dataIndex: "statistics",
      render: (_, res) => <>{res.statistics.total_price} сумм</>,
    },
    {
      title: "За услугу",
      key: "our_income",
      dataIndex: "statistics",
      render: (_, res) => <span> {res.statistics.our_income} сумм</span>,
    },
    {
      title: "Доход водителя",
      key: "doxod",
      dataIndex: "statistics",
      render: (_, res) => (
        <>
          {isNaN(Number(res.statistics.total_price)) ||
          isNaN(Number(res.statistics.our_income))
            ? "Некорректные данные"
            : Number(res.statistics.total_price) -
              Number(res.statistics.our_income)}{" "}
          сумм
        </>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data?.data}
      rowKey={(e) => e.date}
      scroll={{ y: 450 }}
      loading={isLoading}
      pagination={false}
    />
  );
};
