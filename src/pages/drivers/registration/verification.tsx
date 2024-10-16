import { useVerifyDriverMutation } from '@/utils/api/drivers/registration/api'
import { Form, Input, Button, Flex } from 'antd'

export default function VerificationForm({
  phoneNumber,
}: {
  phoneNumber: string
}) {
  const [form] = Form.useForm()
  const { mutate: verifyDriverAccount } = useVerifyDriverMutation()

  const onFinish = (values: { code: string }) => {
    console.log('Received values of form: ', { phoneNumber, code: values.code })
    verifyDriverAccount({
      phone_number: phoneNumber,
      code: values.code,
    })
  }

  return (
    <Flex vertical gap={20}>
      <h1>Подтверждение аккаунта водителя</h1>
      <Form
        form={form}
        layout='vertical'
        onFinish={onFinish}
        style={{ maxWidth: '400px' }}
      >
        <Form.Item
          name='code'
          label='Код подтверждения'
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите код подтверждения',
            },
            { min: 1, message: 'Минимальная длина 1 символ' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Подтвердить
          </Button>
        </Form.Item>
      </Form>
    </Flex>
  )
}
