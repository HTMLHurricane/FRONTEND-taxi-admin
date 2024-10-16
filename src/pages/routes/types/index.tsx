import CRUDModule from '@/components/CrudModule'
import PageLoader from '@/components/PageLoader'
import { VehicleType } from '@/utils/api/cars/types/types'
import { useGetRideTypesQuery } from '@/utils/api/routes/types/api'
import React from 'react'

const RouteTypes: React.FC = () => {
  const { data: rideTypes } = useGetRideTypesQuery()

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

  if (!rideTypes?.ride_types) {
    return <PageLoader />
  }
  return <CRUDModule<VehicleType> data={rideTypes?.ride_types} columns={columns} title='типами маршрутов' />
}

export default RouteTypes
