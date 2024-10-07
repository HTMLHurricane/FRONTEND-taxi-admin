import { useState } from 'react'
import {
  Table,
  Button,
  Drawer,
  Form,
  Input,
  Popconfirm,
  message,
  Space,
  Flex,
} from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'

interface CRUDModuleProps<T> {
  data: T[]
  columns: any[]
  onAdd: (record: T) => Promise<void>
  // onEdit: (id: string | number, record: T) => Promise<void>
  // onDelete: (id: string | number) => Promise<void>
  onEdit: any
  onDelete: any
}

function CRUDModule<T extends { id: string | number }>({
  data,
  columns,
  onAdd,
  onEdit,
  onDelete,
}: CRUDModuleProps<T>) {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false)
  const [editingRecord, setEditingRecord] = useState<T | null>(null)
  const [form] = Form.useForm()

  const showDrawer = (record?: T) => {
    setEditingRecord(record || null)
    setIsDrawerVisible(true)
    if (record) {
      form.setFieldsValue(record)
    } else {
      form.resetFields()
    }
  }

  const closeDrawer = () => {
    setIsDrawerVisible(false)
    setEditingRecord(null)
    form.resetFields()
  }

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields()
      if (editingRecord) {
        await onEdit(editingRecord.id, values as T)
      } else {
        await onAdd(values as T)
      }
      message.success(
        `${editingRecord ? 'Отредактировано' : 'Добавлено'} успешно`
      )
      closeDrawer()
    } catch (error) {
      console.error('Ошибка при сохранении:', error)
      message.error('Произошла ошибка при сохранении')
    }
  }

  const handleDelete = async (id: string | number) => {
    try {
      await onDelete(id)
      message.success('Удалено успешно')
    } catch (error) {
      console.error('Ошибка при удалении:', error)
      message.error('Произошла ошибка при удалении')
    }
  }

  const actionColumn = {
    title: 'Действия',
    key: 'action',
    render: (_: any, record: T) => (
      <Space>
        <Button icon={<EditOutlined />} onClick={() => showDrawer(record)} />
        <Popconfirm
          title="Вы уверены, что хотите удалить это?"
          onConfirm={() => handleDelete(record.id)}
          okText="Да"
          cancelText="Нет"
        >
          <Button icon={<DeleteOutlined />} />
        </Popconfirm>
      </Space>
    ),
  }

  const allColumns = [...columns, actionColumn]

  return (
    <div>
      <Flex align="center" justify="space-between">
        <h1>Управление пользователями</h1>
        <Button
          icon={<PlusOutlined />}
          onClick={() => showDrawer()}
          style={{ marginBottom: 16 }}
        >
          Добавить
        </Button>
      </Flex>
      <Table columns={allColumns} dataSource={data} rowKey="id" />
      <Drawer
        title={editingRecord ? 'Редактировать запись' : 'Добавить новую запись'}
        width={400}
        onClose={closeDrawer}
        visible={isDrawerVisible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div style={{ textAlign: 'right' }}>
            <Button onClick={closeDrawer} style={{ marginRight: 8 }}>
              Отмена
            </Button>
            <Button onClick={handleSubmit} type="primary">
              Сохранить
            </Button>
          </div>
        }
      >
        <Form form={form} layout="vertical">
          {columns
            .filter((col) => col.dataIndex !== 'id') // Исключаем поле id из формы
            .map((col) => (
              <Form.Item
                key={col.dataIndex}
                name={col.dataIndex}
                label={col.title}
                rules={[
                  {
                    required: true,
                    message: `Пожалуйста, введите ${col.title}!`,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            ))}
        </Form>
      </Drawer>
    </div>
  )
}

export default CRUDModule
