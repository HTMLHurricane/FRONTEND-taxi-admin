import CRUDModule from '@/components/CrudModule'
import PageLoader from '@/components/PageLoader'
import {
  useCreateLanguageMutation,
  useDeleteLanguageMutation,
  useGetLanguagesQuery,
  useUpdateLanguageMutation,
} from '@/utils/api/language/api'
import { ILanguage } from '@/utils/api/language/types'
import React from 'react'

const Languages: React.FC = () => {
  const { data: languages } = useGetLanguagesQuery()
  const { mutate: createLanguageMutation } = useCreateLanguageMutation()
  const { mutate: deleteLanguageMutation } = useDeleteLanguageMutation()
  const { mutate: updateLanguageMutation } = useUpdateLanguageMutation()

  const columns = [
    {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Код языка',
      dataIndex: 'code',
      key: 'code',
    },
  ]

  const formFields = [
    {
      name: 'name',
      label: 'Название',
      rules: [{ required: true, message: 'Пожалуйста, введите название!' }],
      component: 'Input',
    },
    {
      name: 'code',
      label: 'Код языка',
      rules: [{ required: true, message: 'Пожалуйста, введите код языка!' }],
      component: 'Input',
    },
  ]

  const handleAdd = async (record: Omit<ILanguage, 'id'>) => {
    createLanguageMutation(record)
  }

  const handleEdit = async (id: string, record: Omit<ILanguage, 'id'>) => {
    updateLanguageMutation({ id: id.toString(), ...record })
  }

  const handleDelete = async (id: string) => {
    deleteLanguageMutation(id)
  }

  if (!languages?.languages) {
    return <PageLoader />
  }
  return (
    <CRUDModule<ILanguage>
      data={languages?.languages}
      columns={columns}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      formFields={formFields}
      title='языками'
    />
  )
}

export default Languages
