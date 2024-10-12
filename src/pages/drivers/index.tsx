import CRUDModule from "@/components/modules/CrudModule";
import PageLoader from "@/components/PageLoader";
import { useGetVehiclesQuery } from "@/utils/api/cars/api";
import { useGetVehicleColorsQuery } from "@/utils/api/cars/colors/api";
import { useDeleteDriverMutation, useGetDriversQuery, useUpdateDriverMutation } from "@/utils/api/drivers/api";
import { IDriver } from "@/utils/api/drivers/types";
import { baseURL } from "@/utils/config/axiosInstance";
import { Image } from "antd";
import React from "react";

const Drivers: React.FC = () => {
  const { data: drivers } = useGetDriversQuery();
  const { mutate: deleteDriverMutation } = useDeleteDriverMutation();
  const { mutate: updateDriverMutation } = useUpdateDriverMutation();
  const { data: cars } = useGetVehiclesQuery();
  const { data: carColors } = useGetVehicleColorsQuery();

  const columns = [
    {
      title: "Ф.И.О",
      dataIndex: "user",
      key: "user",
      render: (user: IDriver["user"]) => user?.profile?.full_name,
    },
    {
      title: "Номер телефона",
      dataIndex: "user",
      key: "user",
      render: (user: IDriver["user"]) => user?.phone_number,
    },
    {
      title: "Машина",
      dataIndex: "vehicle",
      key: "vehicle",
      render: (vehicle: IDriver["vehicle"]) => vehicle?.name,
    },
    {
      title: "Количество мест",
      dataIndex: "vehicle",
      key: "vehicle",
      render: (vehicle: IDriver["vehicle"]) => vehicle?.quantity,
    },
    {
      title: "Тип машины",
      dataIndex: "vehicle",
      key: "vehicle",
      render: (vehicle: IDriver["vehicle"]) => vehicle?.vehicle_type,
    },
    {
      title: "Цвет машины",
      dataIndex: "color",
      key: "color",
      render: (vehicle: IDriver["color"]) => vehicle?.name,
    },
    {
      title: "Фото машины",
      dataIndex: "vehicle",
      key: "vehicle",
      render: (vehicle: IDriver["vehicle"]) => (
        <Image width={200} src={baseURL.slice(0, -1) + vehicle?.image} alt='car' />
      ),
    },
    {
      title: "Номер машины",
      dataIndex: "vehicle_number",
      key: "vehicle_number",
    },
  ];

  const formFields = [
    {
      name: "vehicle_id",
      label: "Машина",
      rules: [{ required: true, message: "Пожалуйста, выберите тип региона!" }],
      options: cars?.vehicles?.map((car) => ({
        value: car.id,
        label: car.name,
      })),
      component: "Select",
    },
    {
      name: "vehicle_number",
      label: "Номер машины",
      rules: [{ required: true, message: "Пожалуйста, введите номер машины!" }],
      component: "Input",
    },
    {
      name: "color_id",
      label: "Цвет машины",
      rules: [{ required: true, message: "Пожалуйста, выберите тип региона!" }],
      options: carColors?.colors?.map((color) => ({
        value: color.id,
        label: color.name,
      })),
      component: "Select",
    },
  ];

  const handleEdit = async (id: string, record: Omit<IDriver, "id">) => {
    updateDriverMutation({ id: id.toString(), ...record });
    console.log(id, record);
  };

  const handleDelete = async (id: string) => {
    deleteDriverMutation(id);
  };

  if (!drivers?.driver_vehicles) {
    return <PageLoader />;
  }
  return (
    <CRUDModule<IDriver>
      data={drivers?.driver_vehicles}
      columns={columns}
      onEdit={handleEdit}
      onDelete={handleDelete}
      formFields={formFields}
      title='водителями'
    />
  );
};

export default Drivers;
