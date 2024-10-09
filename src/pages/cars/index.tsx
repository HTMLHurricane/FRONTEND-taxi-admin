import CRUDModule from "@/components/modules/CrudModule";
import PageLoader from "@/components/PageLoader";
import {
  useGetVehiclesQuery,
  useCreateVehicleMutation,
  useDeleteVehicleMutation,
  useUpdateVehicleMutation,
} from "@/utils/api/cars/api";
import { IVehicle } from "@/utils/api/cars/types";
import { baseURL } from "@/utils/config/axiosInstance";
import { Image } from "antd";
import React from "react";

const Cars: React.FC = () => {
  const { data: cars } = useGetVehiclesQuery();
  const { mutate: createVehicleMutation } = useCreateVehicleMutation();
  const { mutate: deleteVehicleMutation } = useDeleteVehicleMutation();
  const { mutate: updateVehicleMutation } = useUpdateVehicleMutation();

  const columns = [
    {
      title: "Название",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Количество мест",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Тип машины",
      dataIndex: "vehicle_type",
      key: "vehicle_type",
    },
    {
      title: "Изображение",
      dataIndex: "image",
      key: "image",
      render: (img: string) => <Image src={baseURL.slice(0, -1) + img} width={200} />,
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

  const handleAdd = async (record: Omit<IVehicle, "id">) => {
    createVehicleMutation(record);
  };

  const handleEdit = async (id: string, record: Omit<IVehicle, "id">) => {
    updateVehicleMutation({ id, ...record });
  };

  const handleDelete = async (id: string) => {
    deleteVehicleMutation(id);
  };

  if (!cars?.vehicles) {
    return <PageLoader />;
  }
  return (
    <CRUDModule<IVehicle>
      data={cars?.vehicles}
      columns={columns}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      formFields={formFields}
      title='машинами'
    />
  );
};

export default Cars;
