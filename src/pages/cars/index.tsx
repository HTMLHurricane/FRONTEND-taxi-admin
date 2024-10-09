import CRUDModule from "@/components/modules/CrudModule";
import PageLoader from "@/components/PageLoader";
import React from "react";

const Cars: React.FC = () => {
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

export default Cars;
