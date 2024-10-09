import CRUDModule from "@/components/modules/CrudModule";
import PageLoader from "@/components/PageLoader";
import {
  useCreateDriverMutation,
  useGetDriversQuery,
} from "@/utils/api/drivers/api";
import { IRegion } from "@/utils/api/regions/types";
import React from "react";

const Drivers: React.FC = () => {
  const { data: regions } = useGetDriversQuery();
  const { mutate: createRegionMutation } = useCreateDriverMutation();

  const columns = [
    {
      title: "Название",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Тип языка",
      dataIndex: "locality_type",
      key: "locality_type",
    },
  ];

  const handleAdd = async (record: Omit<IRegion, "id">) => {
    console.log("Добавление:", record);
    createRegionMutation(record);
  };

  const handleEdit = async (id: string, record: Omit<IRegion, "id">) => {
    // Здесь должна быть логика редактирования записи в базе данных
    console.log("Редактирование:", id, record);
  };

  const handleDelete = async (id: string) => {
    // Здесь должна быть логика удаления записи из базы данных
    console.log("Удаление:", id);
  };

  if (!regions?.drivers) {
    return <PageLoader />;
  }
  return (
    <CRUDModule<IRegion>
      data={regions?.drivers}
      columns={columns}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      title='водителями'
    />
  );
};

export default Drivers;
