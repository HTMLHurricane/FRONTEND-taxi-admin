import CRUDModule from '@/components/CrudModule'
import PageLoader from '@/components/PageLoader'
import { useGetVehiclesQuery } from '@/utils/api/cars/api'
import { useGetVehicleColorsQuery } from '@/utils/api/cars/colors/api'
import {
  useDeleteDriverMutation,
  useGetDriversQuery,
  useUpdateDriverMutation,
} from '@/utils/api/drivers/api'
import { IDriver } from '@/utils/api/drivers/types'
import { baseURL } from '@/utils/config/axiosInstance'
import { Image } from 'antd'
import React from 'react'

const Drivers: React.FC = () => {
  const { data: drivers } = useGetDriversQuery()
  const { mutate: deleteDriverMutation } = useDeleteDriverMutation()
  const { mutate: updateDriverMutation } = useUpdateDriverMutation()
  const { data: cars } = useGetVehiclesQuery()
  const { data: carColors } = useGetVehicleColorsQuery()

  const columns = [
    {
      title: 'Ф.И.О',
      dataIndex: 'user',
      key: 'user',
      render: (user: IDriver['user']) => user?.profile?.full_name,
    },
    {
      title: 'Номер телефона',
      dataIndex: 'user',
      key: 'user',
      render: (user: IDriver['user']) => user?.phone_number,
    },
    {
      title: 'Машина',
      dataIndex: 'vehicle',
      key: 'vehicle',
      render: (vehicle: IDriver['vehicle']) => vehicle?.name,
    },
    {
      title: 'Количество мест',
      dataIndex: 'vehicle',
      key: 'vehicle',
      render: (vehicle: IDriver['vehicle']) => vehicle?.quantity,
    },
    {
      title: 'Тип машины',
      dataIndex: 'vehicle',
      key: 'vehicle',
      render: (vehicle: IDriver['vehicle']) => vehicle?.vehicle_type,
    },
    {
      title: 'Цвет машины',
      dataIndex: 'color',
      key: 'color',
      render: (vehicle: IDriver['color']) => vehicle?.name,
    },
    {
      title: 'Фото машины',
      dataIndex: 'vehicle',
      key: 'vehicle',
      render: (vehicle: IDriver['vehicle']) => (
        <Image
          width={200}
          src={baseURL.slice(0, -1) + vehicle?.image}
          alt='car'
        />
      ),
    },
    {
      title: 'Номер машины',
      dataIndex: 'vehicle_number',
      key: 'vehicle_number',
    },
    {
      title: 'Тех. паспорт (спереди)',
      dataIndex: 'front_image_tp',
      key: 'front_image_tp',
      render: (src: IDriver['front_image_tp']) => (
        <Image width={200} src={baseURL.slice(0, -1) + src} alt='car' />
      ),
    },
    {
      title: 'Тех. паспорт (сзади)',
      dataIndex: 'back_image_tp',
      key: 'back_image_tp',
      render: (src: IDriver['back_image_tp']) => (
        <Image width={200} src={baseURL.slice(0, -1) + src} alt='car' />
      ),
    },
    {
      title: 'Дата выдачи',
      dataIndex: 'issue_date',
      key: 'issue_date',
    },
    {
      title: 'Год выпуска',
      dataIndex: 'manufacture_year',
      key: 'manufacture_year',
    },
    {
      title: 'Владелец',
      dataIndex: 'owner',
      key: 'owner',
    },
    {
      title: 'Адрес владельца',
      dataIndex: 'owner_address',
      key: 'owner_address',
    },
  ]

  const formFields = [
    {
      name: 'vehicle_id',
      label: 'Машина',
      rules: [{ required: true, message: 'Пожалуйста, выберите машину!' }],
      options: cars?.vehicles?.map((car) => ({
        value: car.id,
        label: car.name,
      })),
      component: 'Select',
    },
    {
      name: 'vehicle_number',
      label: 'Номер машины',
      rules: [{ required: true, message: 'Пожалуйста, введите номер машины!' }],
      component: 'Input',
    },
    {
      name: 'color_id',
      label: 'Цвет машины',
      rules: [{ required: true, message: 'Пожалуйста, выберите цвет машины!' }],
      options: carColors?.colors?.map((color) => ({
        value: color.id,
        label: color.name,
      })),
      component: 'Select',
    },
    {
      name: 'issue_date',
      label: 'Дата выдачи',
      rules: [{ required: true, message: 'Пожалуйста, выберите дату выдачи!' }],
      component: 'DatePicker',
    },
    {
      name: 'manufacture_year',
      label: 'Год выпуска',
      rules: [{ required: true, message: 'Пожалуйста, введите год выпуска!' }],
      component: 'InputNumber',
    },
    {
      name: 'owner',
      label: 'Владелец',
      rules: [
        { required: true, message: 'Пожалуйста, введите имя владельца!' },
      ],
      component: 'Input',
    },
    {
      name: 'owner_address',
      label: 'Адрес владельца',
      rules: [
        { required: true, message: 'Пожалуйста, введите адрес владельца!' },
      ],
      component: 'Input',
    },
  ]

  const handleEdit = async (id: string, record: Omit<IDriver, 'id'>) => {
    updateDriverMutation({ id: id.toString(), ...record })
    console.log(id, record)
  }

  const handleDelete = async (id: string) => {
    deleteDriverMutation(id)
  }

  if (!drivers?.drivers) {
    return <PageLoader />
  }
  return (
    <CRUDModule<IDriver>
      data={drivers?.drivers}
      columns={columns}
      onEdit={handleEdit}
      onDelete={handleDelete}
      formFields={formFields}
      title='водителями'
    />
  )
}

export default Drivers
