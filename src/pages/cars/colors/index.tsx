import CRUDModule from "@/components/modules/CrudModule";
import PageLoader from "@/components/PageLoader";
import {
  useGetVehicleColorsQuery,
  useCreateVehicleColorMutation,
  useDeleteVehicleColorMutation,
  useUpdateVehicleColorMutation,
} from "@/utils/api/cars/colors/api";
import { IVehicleColor } from "@/utils/api/cars/colors/types";
import React from "react";

const Colors: React.FC = () => {
  const { data: colors } = useGetVehicleColorsQuery();
  const { mutate: createVehicleColorMutation } = useCreateVehicleColorMutation();
  const { mutate: deleteVehicleColorMutation } = useDeleteVehicleColorMutation();
  const { mutate: updateVehicleColorMutation } = useUpdateVehicleColorMutation();

  const columns = [
    {
      title: "Название",
      dataIndex: "name",
      key: "name",
    },
  ];

  const formFields = [
    {
      name: "name",
      label: "Название",
      rules: [{ required: true, message: "Пожалуйста, введите название!" }],
      component: "Input",
    },
  ];

  const handleAdd = async (record: Omit<IVehicleColor, "id">) => {
    createVehicleColorMutation(record);
  };

  const handleEdit = async (id: string, record: Omit<IVehicleColor, "id">) => {
    updateVehicleColorMutation({ id, ...record });
  };

  const handleDelete = async (id: string) => {
    deleteVehicleColorMutation(id);
  };

  if (!colors?.colors) {
    return <PageLoader />;
  }
  return (
    <CRUDModule<IVehicleColor>
      data={colors?.colors}
      columns={columns}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      formFields={formFields}
      title='языками'
    />
  );
};

export default Colors;
