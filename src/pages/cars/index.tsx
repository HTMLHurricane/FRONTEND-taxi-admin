import CRUDModule from "@/components/modules/CrudModule";
import PageLoader from "@/components/PageLoader";
import {
  useGetVehiclesQuery,
  useCreateVehicleMutation,
  useDeleteVehicleMutation,
  useUpdateVehicleMutation,
} from "@/utils/api/cars/api";
import { IVehicle } from "@/utils/api/cars/types";
import { useGetCarTypesQuery } from "@/utils/api/cars/types/api";
import { baseURL } from "@/utils/config/axiosInstance";
import { Image } from "antd";
import React from "react";

const Cars: React.FC = () => {
  const { data: cars } = useGetVehiclesQuery();
  const { mutate: createVehicleMutation } = useCreateVehicleMutation();
  const { mutate: deleteVehicleMutation } = useDeleteVehicleMutation();
  const { mutate: updateVehicleMutation } = useUpdateVehicleMutation();
  const { data: regionTypes } = useGetCarTypesQuery();

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
    {
      name: "quantity",
      label: "Количество мест в машине",
      rules: [{ required: true, message: "Пожалуйста, введите количество мест в машине!" }],
      component: "Input",
    },
    {
      name: "vehicle_type",
      label: "Тип машины",
      rules: [{ required: true, message: "Пожалуйста, выберите тип региона!" }],
      options: regionTypes?.vehicle_types?.map((lang) => ({
        value: lang.code,
        label: lang.name,
      })),
      component: "Select",
    },
    {
      name: "image",
      label: "Изображение",
      rules: [{ required: true, message: "Пожалуйста, выберите файл!" }],
      component: "File",
    },
  ];

  const handleAdd = async (record: Omit<IVehicle, "id">) => {
    const formData = new FormData();
    formData.append("name", record.name);
    formData.append("quantity", record.quantity.toString());
    formData.append("vehicle_type", record.vehicle_type);
    formData.append("image", record.image);
    createVehicleMutation(formData);
  };

  const handleEdit = async (id: string, record: Omit<IVehicle, "id">) => {
    const formData = new FormData();
    formData.append("id", id);
    record.name && formData.append("name", record.name);
    record.quantity && formData.append("quantity", record.quantity.toString());
    record.vehicle_type && formData.append("vehicle_type", record.vehicle_type);
    record.image && formData.append("image", record.image);
    updateVehicleMutation(formData);
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
