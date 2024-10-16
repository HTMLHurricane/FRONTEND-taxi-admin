import CRUDModule from '@/components/CrudModule'
import PageLoader from '@/components/PageLoader'
import { useGetVehiclesQuery } from '@/utils/api/cars/api'
import {
  useGetColorsAssignQuery,
  useCreateColorAssignMutation,
  useDeleteColorAssignMutation,
  useUpdateColorAssignMutation,
} from '@/utils/api/cars/color-assign/api'
import { IColorAssign } from '@/utils/api/cars/color-assign/types'
import { useGetVehicleColorsQuery } from '@/utils/api/cars/colors/api'
import { IVehicle } from '@/utils/api/cars/types'
import { IColor } from '@/utils/api/drivers/types'
import { baseURL } from '@/utils/config/axiosInstance'
import { Image } from 'antd'
import React from 'react'

const ColorAssign: React.FC = () => {
  const { data: colors } = useGetColorsAssignQuery()
  const { mutate: createVehicleColorMutation } = useCreateColorAssignMutation()
  const { mutate: deleteVehicleColorMutation } = useDeleteColorAssignMutation()
  const { mutate: updateVehicleColorMutation } = useUpdateColorAssignMutation()
  const { data: carColors } = useGetVehicleColorsQuery()
  const { data: cars } = useGetVehiclesQuery()

  const columns = [
    {
      title: 'Цвет',
      dataIndex: 'color',
      key: 'color.id',
      render: (color: IColor) => color.name,
    },
    {
      title: 'Машина',
      dataIndex: 'vehicle',
      key: 'vehicle.id',
      render: (vehicle: IVehicle) => vehicle.name,
    },
    {
      title: 'Изображение',
      dataIndex: 'image',
      key: 'image',
      render: (image: string) => <Image src={baseURL.slice(0, -1) + image} width={200} alt='car' />,
    },
  ]

  const formFields = [
    {
      name: 'vehicle',
      label: 'Машина',
      rules: [{ required: true, message: 'Пожалуйста, выберите тип региона!' }],
      options: cars?.vehicles?.map((car) => ({
        value: car.id,
        label: car.name,
      })),
      component: 'Select',
    },
    {
      name: 'color',
      label: 'Цвет машины',
      rules: [{ required: true, message: 'Пожалуйста, выберите тип региона!' }],
      options: carColors?.colors?.map((color) => ({
        value: color.id,
        label: color.name,
      })),
      component: 'Select',
    },
    {
      name: 'image',
      label: 'Изображение',
      rules: [{ required: true, message: 'Пожалуйста, выберите файл!' }],
      component: 'File',
    },
  ]

  const handleAdd = async (record: Omit<IColorAssign, 'id'>) => {
    console.log(record)
    const formData = new FormData()
    formData.append('vehicle_id', record.vehicle.toString())
    formData.append('color_id', record.color.toString())
    formData.append('image', record.image)
    createVehicleColorMutation(formData)
  }

  const handleEdit = async (id: string, record: Omit<IColorAssign, 'id'>) => {
    updateVehicleColorMutation({ id, ...record })
  }

  const handleDelete = async (id: string) => {
    deleteVehicleColorMutation(id)
  }

  if (!colors?.vehicle_colors) {
    return <PageLoader />
  }
  return (
    <CRUDModule<IColorAssign>
      data={colors?.vehicle_colors}
      columns={columns}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      formFields={formFields}
      title='цветами машин'
    />
  )
}

export default ColorAssign
