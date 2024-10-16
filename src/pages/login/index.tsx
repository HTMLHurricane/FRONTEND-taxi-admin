import { Form, Input, Button, Layout, Row, Col, Divider } from 'antd'
import { PhoneOutlined, LockOutlined } from '@ant-design/icons'
import { MaskedInput } from 'antd-mask-input'
import { useLoginMutation } from '@/utils/api/auth/api'

const { Content, Footer } = Layout

const LoginPage = () => {
  const [form] = Form.useForm()
  const { mutate: login, isError, error } = useLoginMutation()
  const isLoading = false
  const onFinish = (data: any) => login(data)

  return (
    <>
      <Layout className='layout'>
        <Row>
          <Col span={12} offset={6}>
            <Content
              style={{
                padding: '150px 0 180px',
                maxWidth: '360px',
                margin: '0 auto',
              }}
            >
              <h1 style={{ textAlign: 'center' }}>Авторизация</h1>
              <Divider />
              <div className='site-layout-content'>
                <Form
                  form={form}
                  name='normal_login'
                  className='login-form'
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                >
                  <Form.Item
                    name='phone_number'
                    rules={[
                      {
                        required: true,
                        message: 'Пожалуйста, введите ваш номер!',
                      },
                    ]}
                  >
                    <MaskedInput
                      prefix={<PhoneOutlined className='site-form-item-icon' />}
                      mask={'+998(00)000 00 00'}
                      onChange={(e) =>
                        form.setFieldValue(
                          'phone_number',
                          `+998${e.unmaskedValue}`
                        )
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    name='password'
                    rules={[
                      {
                        required: true,
                        message: 'Пожалуйста, введите ваш пароль!',
                      },
                    ]}
                  >
                    <Input
                      prefix={<LockOutlined className='site-form-item-icon' />}
                      type='password'
                      placeholder='*******'
                      autoComplete='off'
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type='primary'
                      htmlType='submit'
                      className='login-form-button'
                      loading={isLoading}
                    >
                      Войти
                    </Button>
                  </Form.Item>
                  {isError && <span className='error'>{error?.message}</span>}
                </Form>
              </div>
            </Content>
          </Col>
        </Row>

        <Footer style={{ textAlign: 'center' }}>Aralhub ©2024</Footer>
      </Layout>
    </>
  )
}

export default LoginPage
