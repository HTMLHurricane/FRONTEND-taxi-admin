import { useState } from "react";
import { Table } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import { useGetUsersQuery } from "@/utils/api/clients/api";

interface UserTableData {
  key: string;
  fullName: string;
  phoneNumber: string;
}

export const Clients = () => {
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
  });

  const { data, isLoading } = useGetUsersQuery(
    pagination.current || 1,
    pagination.pageSize || 10
  );

  const tableData: UserTableData[] =
    data?.data.rides.results.map((user) => ({
      key: user.id,
      fullName: user.profile.full_name,
      phoneNumber: user.phone_number,
    })) || [];

  const handleTableChange = (pagination: TablePaginationConfig) => {
    setPagination(pagination);
  };

  const columns: ColumnsType<UserTableData> = [
    {
      title: "ФИО",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Номер телефона",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={tableData}
        loading={isLoading}
        scroll={{ y: 600 }}
        pagination={{
          current: pagination.current,
          pageSize: pagination.pageSize,
          total: data?.data.rides.count,
        }}
        onChange={handleTableChange}
      />
    </div>
  );
};
