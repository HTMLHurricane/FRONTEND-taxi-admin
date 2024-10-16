import CRUDModule from '@/components/CrudModule'
import PageLoader from '@/components/PageLoader'
import { useGetLanguagesQuery } from '@/utils/api/language/api'
import { useGetRegionsQuery } from '@/utils/api/regions/api'
import {
  useGetRegionTranslationsQuery,
  useCreateRegionTranslationMutation,
  useDeleteRegionTranslationMutation,
  useUpdateRegionTranslationMutation,
} from '@/utils/api/regions/translations/api'
import { IRegionTranslation } from '@/utils/api/regions/translations/types'
import { TableProps } from 'antd'
import React from 'react'

const RegionTranslations: React.FC = () => {
  const { data: translations } = useGetRegionTranslationsQuery()
  const { data: regions } = useGetRegionsQuery()
  const { data: languages } = useGetLanguagesQuery()
  const { mutate: createRegionsTranslationMutation } = useCreateRegionTranslationMutation()
  const { mutate: deleteRegionTranslationMutation } = useDeleteRegionTranslationMutation()
  const { mutate: updateRegionTranslationMutation } = useUpdateRegionTranslationMutation()

  const columns: TableProps<IRegionTranslation>['columns'] = [
    {
      title: 'Язык',
      dataIndex: 'language',
      key: 'language',
      render: (lang) => lang.name,
    },
    {
      title: 'Регион',
      dataIndex: 'locality',
      key: 'locality',
      render: (reg) => reg.name,
    },
    {
      title: 'Перевод',
      dataIndex: 'translation',
      key: 'translation',
    },
  ]

  const formFields = [
    {
      name: 'translation',
      label: 'Перевод',
      rules: [{ required: true, message: 'Пожалуйста, введите перевод!' }],
      component: 'Input',
    },
    {
      name: 'language_id',
      label: 'Язык',
      rules: [{ required: true, message: 'Пожалуйста, выберите язык!' }],
      component: 'Select',
      options: languages?.languages?.map((lang) => ({
        value: lang.id,
        label: lang.name,
      })),
    },
    {
      name: 'locality_id',
      label: 'Регион',
      rules: [{ required: true, message: 'Пожалуйста, выберите регион!' }],
      component: 'Select',
      options: regions?.localities?.map((lang) => ({
        value: lang.id,
        label: lang.name,
      })),
    },
  ]

  const handleAdd = async (record: any) => {
    console.log('Добавление:', record)
    createRegionsTranslationMutation(record)
  }

  const handleEdit = async (id: string, record: Omit<IRegionTranslation, 'id'>) => {
    updateRegionTranslationMutation({ id, ...record })
    console.log('Редактирование:', id, record)
  }

  const handleDelete = async (id: string) => {
    deleteRegionTranslationMutation(id)
    console.log('Удаление:', id)
  }

  if (!translations?.locality_translations) {
    return <PageLoader />
  }
  return (
    <CRUDModule<IRegionTranslation>
      data={translations?.locality_translations}
      columns={columns}
      onAdd={handleAdd}
      onEdit={handleEdit}
      formFields={formFields}
      onDelete={handleDelete}
      title='переводами регионов'
    />
  )
}

export default RegionTranslations
