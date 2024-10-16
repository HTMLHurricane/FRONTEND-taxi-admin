import CRUDModule from '@/components/CrudModule'
import PageLoader from '@/components/PageLoader'
import { useGetVehiclesQuery } from '@/utils/api/cars/api'
import { useGetRegionsQuery } from '@/utils/api/regions/api'
import { IRegion } from '@/utils/api/regions/types'
import {
  useCreatePriceMutation,
  useDeletePriceMutation,
  useGetPricesQuery,
  useUpdatePriceMutation,
} from '@/utils/api/routes/price/api'
import { IPrice } from '@/utils/api/routes/price/types'
import { baseURL } from '@/utils/config/axiosInstance'
import { Image } from 'antd'
import React from 'react'

const Special: React.FC = () => {
  const { data: prices } = useGetPricesQuery()
  const { mutate: createPriceMutation } = useCreatePriceMutation()
  const { mutate: deletePriceMutation } = useDeletePriceMutation()
  const { mutate: updatePriceMutation } = useUpdatePriceMutation()
  const { data: regions } = useGetRegionsQuery()
  const { data: cars } = useGetVehiclesQuery()

  const columns = [
    {
      title: 'Откуда',
      dataIndex: 'from_locality',
      key: 'from_locality',
      render: (from_region: IRegion) => from_region?.name,
    },
    {
      title: 'Куда',
      dataIndex: 'to_locality',
      key: 'to_locality',
      render: (from_region: IRegion) => from_region?.name,
    },
    {
      title: 'Машина',
      dataIndex: 'vehicle',
      key: 'vehicle',
      render: (vehicle: IPrice['vehicle']) => vehicle?.name,
    },
    {
      title: 'Количество мест в машине',
      dataIndex: 'vehicle',
      key: 'vehicle',
      render: (vehicle: IPrice['vehicle']) => vehicle?.quantity,
    },
    {
      title: 'Машина',
      dataIndex: 'vehicle',
      key: 'vehicle',
      render: (vehicle: IPrice['vehicle']) => <Image src={baseURL.slice(0, -1) + vehicle?.image} width={200} />,
    },
    {
      title: 'Общая цена',
      dataIndex: 'total_price',
      key: 'total_price',
    },
  ]

  const formFields = [
    {
      name: 'from_locality_id',
      label: 'Откуда',
      rules: [{ required: true, message: 'Пожалуйста, выберите стартовый регион!' }],
      options: regions?.localities?.map((region) => ({
        value: region.id,
        label: region.name,
      })),
      component: 'Select',
    },
    {
      name: 'to_locality_id',
      label: 'Куда',
      rules: [{ required: true, message: 'Пожалуйста, выберите конечный регион!' }],
      options: regions?.localities?.map((region) => ({
        value: region.id,
        label: region.name,
      })),
      component: 'Select',
    },
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
      name: 'total_price',
      label: 'Стоимость поездки за салон',
      rules: [{ required: true, message: 'Пожалуйста, введите общую стоимость!' }],
      component: 'Input',
    },
  ]

  const handleAdd = async (record: any) => {
    createPriceMutation({
      from_locality_id: record.from_locality_id,
      to_locality_id: record.to_locality_id,
      for_special: {
        vehicle_id: record.vehicle_id,
        total_price: record.total_price,
      },
    })
  }

  const handleEdit = async (id: string, record: any) => {
    updatePriceMutation({
      id,
      for_special: {
        total_price: record.total_price,
      },
    })
  }

  const handleDelete = async (id: string) => {
    deletePriceMutation(id)
  }

  if (!prices?.prices) {
    return <PageLoader />
  }
  return (
    <CRUDModule<IPrice>
      data={prices?.prices?.filter((p) => p.ride_type === 'special') || []}
      columns={columns}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      formFields={formFields}
      title='маршрутами специальных'
    />
  )
}

export default Special
