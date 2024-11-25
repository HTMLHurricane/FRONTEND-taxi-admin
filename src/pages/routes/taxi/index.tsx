import CRUDModule from '@/components/CrudModule'
import PageLoader from '@/components/PageLoader'
import { useGetRegionsQuery } from '@/utils/api/regions/api'
import { IRegion } from '@/utils/api/regions/types'
import {
  useCreatePriceMutation,
  useDeletePriceMutation,
  useGetPricesQuery,
  useUpdatePriceMutation,
} from '@/utils/api/routes/price/api'
import { IPrice } from '@/utils/api/routes/price/types'
import React from 'react'

const Taxi: React.FC = () => {
  const { data: prices } = useGetPricesQuery()
  const { mutate: createPriceMutation } = useCreatePriceMutation()
  const { mutate: deletePriceMutation } = useDeletePriceMutation()
  const { mutate: updatePriceMutation } = useUpdatePriceMutation()
  const { data: regions } = useGetRegionsQuery()

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
      title: 'Цена за каждое место',
      dataIndex: 'unit_price',
      key: 'unit_price',
    },
    {
      title: 'Длительность',
      dataIndex: 'duration',
      key: 'duration',
    },
  ]

  const formFields = [
    {
      name: 'from_locality_id',
      label: 'Откуда',
      rules: [
        { required: true, message: 'Пожалуйста, выберите стартовый регион!' },
      ],
      options: regions?.localities?.map((region) => ({
        value: region.id,
        label: region.name,
      })),
      component: 'Select',
    },
    {
      name: 'to_locality_id',
      label: 'Куда',
      rules: [
        { required: true, message: 'Пожалуйста, выберите конечный регион!' },
      ],
      options: regions?.localities?.map((region) => ({
        value: region.id,
        label: region.name,
      })),
      component: 'Select',
    },
    {
      name: 'unit_price',
      label: 'Стоимость за 1 место',
      rules: [
        {
          required: true,
          message: 'Пожалуйста, введите стоимость за 1 место!',
        },
      ],
      component: 'Input',
    },
    {
      name: 'duration',
      label: 'Время в пути (ЧЧ:ММ:СС)',
      rules: [{ required: true, message: 'Пожалуйста, введите время в пути!' }],
      component: 'Input',
    },
  ]

  const handleAdd = async (record: any) => {
    createPriceMutation({
      from_locality_id: record.from_locality_id,
      to_locality_id: record.to_locality_id,
      unit_price: record.unit_price,
      duration: record.duration,
    })
  }

  const handleEdit = async (id: string, record: any) => {
    updatePriceMutation({ id, ...record })
  }

  const handleDelete = async (id: string) => {
    deletePriceMutation(id)
  }

  if (!prices?.prices) {
    return <PageLoader />
  }
  return (
    <CRUDModule<IPrice>
      data={prices?.prices.filter((p) => p.ride_type === 'taxi') || []}
      columns={columns}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      formFields={formFields}
      title='маршрутами такси'
    />
  )
}

export default Taxi
