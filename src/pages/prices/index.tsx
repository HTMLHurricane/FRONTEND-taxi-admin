import CRUDModule from "@/components/modules/CrudModule";
import PageLoader from "@/components/PageLoader";
import {
  useCreatePriceMutation,
  useGetPricesQuery,
} from "@/utils/api/prices/api";
import { IRegion } from "@/utils/api/regions/types";
import React from "react";

const Prices: React.FC = () => {
  const { data: prices } = useGetPricesQuery();
  const { mutate: createPriceMutation } = useCreatePriceMutation();

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
    createPriceMutation(record);
  };

  const handleEdit = async (id: number, record: Omit<IRegion, "id">) => {
    // Здесь должна быть логика редактирования записи в базе данных
    console.log("Редактирование:", id, record);
  };

  const handleDelete = async (id: number) => {
    // Здесь должна быть логика удаления записи из базы данных
    console.log("Удаление:", id);
  };

  if (!prices?.prices) {
    return <PageLoader />;
  }
  return (
    <CRUDModule<IRegion>
      data={prices?.prices}
      columns={columns}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      title='языками'
    />
  );
};

export default Prices;
