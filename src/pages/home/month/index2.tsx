import { useGetMonthly } from "@/utils/api/home/api";
import { Direction, Params } from "@/utils/api/home/types";
import { Table, TableProps } from "antd";
import { FC } from "react";

interface Props {
  params: Params;
}

export const MonthlyStatistic: FC<Props> = ({ params }) => {
  const { data, isLoading } = useGetMonthly(params);

  const columns: TableProps<Direction>["columns"] = [
    {
      title: "Маршрут",
      dataIndex: ["direction"],
      key: "from_locality",
      render: (_, res) => (
        <>
          {res.direction.from_locality.name} - {res.direction.to_locality.name}
        </>
      ),
    },
    {
      title: "Транспорт",
      dataIndex: ["direction", "vehicle", "name"],
      key: "vehicle_name",
    },
    {
      title: "Количество выездов",
      key: "total",
      dataIndex: "statistics",
      render: (_, res) => <>{res.statistics.total}</>,
    },
    {
      title: "Общее количество единиц",
      dataIndex: ["statistics", "total_quantity"],
      key: "total_quantity",
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
      rowKey={(e) => e.direction.from_locality.name}
      scroll={{ y: 450 }}
      loading={isLoading}
      pagination={false}
    />
  );
};
