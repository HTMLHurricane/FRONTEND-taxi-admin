import CRUDModule from "@/components/modules/CrudModule";
import PageLoader from "@/components/PageLoader";
import {
  useCreateRegionMutation,
  useDeleteRegionMutation,
  useGetRegionsQuery,
  useUpdateRegionMutation,
} from "@/utils/api/regions/api";
import { IRegion } from "@/utils/api/regions/types";
import { useGetRegionTypesQuery } from "@/utils/api/regions/types/api";
import React from "react";

const Regions: React.FC = () => {
  const { data: regions } = useGetRegionsQuery();
  const { mutate: createRegionMutation } = useCreateRegionMutation();
  const { mutate: deleteRegionMutation } = useDeleteRegionMutation();
  const { mutate: updateRegionMutation } = useUpdateRegionMutation();
  const { data: regionTypes } = useGetRegionTypesQuery();

  const columns = [
    {
      title: "Название",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Тип региона",
      dataIndex: "locality_type",
      key: "locality_type",
      render: (loc: string) => regionTypes?.locality_types?.find((el) => el.code === loc)?.name,
    },
  ];

  const formFields = [
    {
      name: "name",
      label: "Название",
      rules: [{ required: true, message: "Пожалуйста, введите название!" }],
      component: "Input",
    },
    {
      name: "locality_type",
      label: "Тип региона",
      rules: [{ required: true, message: "Пожалуйста, выберите тип региона!" }],
      options: regionTypes?.locality_types?.map((lang) => ({
        value: lang.code,
        label: lang.name,
      })),
      component: "Select",
    },
  ];

  const handleAdd = async (record: Omit<IRegion, "id">) => {
    createRegionMutation(record);
  };

  const handleEdit = async (id: string, record: Omit<IRegion, "id">) => {
    updateRegionMutation({ id, ...record });
  };

  const handleDelete = async (id: string) => {
    deleteRegionMutation(id);
  };

  if (!regions?.localities) {
    return <PageLoader />;
  }
  return (
    <CRUDModule<IRegion>
      data={regions?.localities}
      columns={columns}
      onAdd={handleAdd}
      onEdit={handleEdit}
      formFields={formFields}
      onDelete={handleDelete}
      title='регионами'
    />
  );
};

export default Regions;
