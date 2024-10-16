import CRUDModule from '@/components/CrudModule'
import PageLoader from '@/components/PageLoader'
import { useGetCarTypesQuery } from '@/utils/api/cars/types/api'
import { VehicleType } from '@/utils/api/cars/types/types'
import React from 'react'

const CarTypes: React.FC = () => {
  const { data: regionTypes } = useGetCarTypesQuery()

  const columns = [
    {
      title: 'Код',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
    },
  ]

  if (!regionTypes?.vehicle_types) {
    return <PageLoader />
  }
  return <CRUDModule<VehicleType> data={regionTypes?.vehicle_types} columns={columns} title='типами машин' />
}

export default CarTypes
