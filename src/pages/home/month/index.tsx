import { useGetAllDailyQuery } from "@/utils/api/home/api";
import { Params, StatisticResponse } from "@/utils/api/home/types";
import { Table, TableProps } from "antd";
import { FC } from "react";

interface Props {
  params: Params;
}

export const AllMonthStatistic: FC<Props> = ({ params }) => {
  const { data, isLoading } = useGetAllDailyQuery(params);

  const columns: TableProps<StatisticResponse>["columns"] = [
    {
      title: "Дата",
      key: "date",
      dataIndex: "date",
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
