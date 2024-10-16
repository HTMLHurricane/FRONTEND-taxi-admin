import {
  Form,
  Input,
  Select,
  Button,
  Flex,
  DatePicker,
  Row,
  Col,
  Upload,
} from 'antd'
import { useGetDriverTypesQuery } from '@/utils/api/drivers/types/api'
import { useGetVehiclesQuery } from '@/utils/api/cars/api'
import { useGetVehicleColorsQuery } from '@/utils/api/cars/colors/api'
import { useState } from 'react'
import VerificationForm from './verification'
import dayjs from 'dayjs'
import { useCreateDriverMutation } from '@/utils/api/drivers/registration/api'
import { UploadOutlined } from '@ant-design/icons'
import { ICreateAccountBody } from '@/utils/api/drivers/registration/types'
const { Option } = Select

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
}

export default function RegistrationForm() {
  const [form] = Form.useForm()
  const { data: driverTypes } = useGetDriverTypesQuery()
  const { data: cars } = useGetVehiclesQuery()
  const { data: carColors } = useGetVehicleColorsQuery()
  const { mutate: createDriver } = useCreateDriverMutation()
  const [isVerification, setIsVerification] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')

  const onFinish = (values: ICreateAccountBody) => {
    const formData = new FormData()
    formData.append('phone_number', values.phone_number)
    formData.append('driver_type', values.driver_type)
    formData.append('full_name', values.full_name)
    formData.append('vehicle_id', values.vehicle_id)
    formData.append('color_id', values.color_id)
    formData.append('vehicle_number', values.vehicle_number)
    formData.append('owner', values.owner)
    formData.append('owner_address', values.owner_address)
    formData.append('issue_date', dayjs(values.issue_date).format('YYYY-MM-DD'))
    formData.append('manufacture_year', values.manufacture_year)
    formData.append('front_image_tp', values.front_image_tp.file)
    formData.append('back_image_tp', values.back_image_tp.file)
    createDriver(formData)

    console.log(values)

    setPhoneNumber(values.phone_number)
    setIsVerification(true)
  }

  if (isVerification) {
    return <VerificationForm phoneNumber={phoneNumber} />
  }
  return (
    <Flex vertical gap={20}>
      <h1>Регистрация водителя</h1>
      <Form
        form={form}
        {...formItemLayout}
        onFinish={onFinish}
        style={{ maxWidth: '800px' }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name='phone_number'
              label='Номер телефона'
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста, введите номер телефона',
                },
                { min: 1, message: 'Минимальная длина 1 символ' },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='driver_type'
              label='Тип водителя'
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста, выберите тип водителя',
                },
              ]}
            >
              <Select>
                {driverTypes?.driver_types?.map((type) => (
                  <Option key={type.code} value={type.code}>
                    {type.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='full_name'
              label='Ф.И.О.'
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста, введите Ф.И.О. водителя',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='vehicle_id'
              label='Машина'
              rules={[
                { required: true, message: 'Пожалуйста, выберите машину' },
              ]}
            >
              <Select>
                {cars?.vehicles?.map((car) => (
                  <Option key={car.id} value={car.id}>
                    {car.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='color_id'
              label='Цвет машины (по умолчанию белый цвет)'
            >
              <Select>
                {carColors?.colors?.map((color) => (
                  <Option key={color.id} value={color.id}>
                    {color.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='vehicle_number'
              label='Номер машины'
              rules={[
                { required: true, message: 'Пожалуйста, введите номер машины' },
                { min: 1, message: 'Минимальная длина 1 символ' },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='owner'
              label='Владелец машины'
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста, введите владельца машины',
                },
                { max: 200, message: 'Максимальная длина 200 символов' },
                { min: 1, message: 'Минимальная длина 1 символ' },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='owner_address'
              label='Адрес владельца машины'
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста, введите адрес владельца машины',
                },
                { max: 255, message: 'Максимальная длина 255 символов' },
                { min: 1, message: 'Минимальная длина 1 символ' },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='issue_date'
              label='Дата выдачи техпаспорта'
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста, выберите дату выдачи техпаспорта',
                },
              ]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='manufacture_year'
              label='Год выпуска машины'
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста, введите год выпуска машины',
                },
                { min: 1, message: 'Минимальная длина 1 символ' },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name='front_image_tp'
              label='Фото техпаспорта (передняя сторона)'
              rules={[
                {
                  required: true,
                  message:
                    'Пожалуйста, загрузите фото передней стороны техпаспорта',
                },
              ]}
            >
              <Upload beforeUpload={() => false}>
                <Button icon={<UploadOutlined />}>Загрузить фото</Button>
              </Upload>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='back_image_tp'
              label='Фото техпаспорта (задняя сторона)'
              rules={[
                {
                  required: true,
                  message:
                    'Пожалуйста, загрузите фото задней стороны техпаспорта',
                },
              ]}
            >
              <Upload beforeUpload={() => false}>
                <Button icon={<UploadOutlined />}>Загрузить фото</Button>
              </Upload>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Зарегистрировать
          </Button>
        </Form.Item>
      </Form>
    </Flex>
  )
}
