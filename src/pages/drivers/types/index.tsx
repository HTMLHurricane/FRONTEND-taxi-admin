import CRUDModule from '@/components/CrudModule'
import PageLoader from '@/components/PageLoader'
import { useGetDriverTypesQuery } from '@/utils/api/drivers/types/api'
import { IRegionType } from '@/utils/api/regions/types/types'
import React from 'react'

const DriversTypes: React.FC = () => {
  const { data: driverTypes } = useGetDriverTypesQuery()

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

  if (!driverTypes?.driver_types) {
    return <PageLoader />
  }
  return <CRUDModule<IRegionType> data={driverTypes?.driver_types} columns={columns} title='типами водителей' />
}

export default DriversTypes
