import { useEffect } from 'react'
import { Button, Result, Space } from 'antd'
import { useLocation } from 'react-router-dom'

const NotFound = () => {
  const location = useLocation()

  useEffect(() => {
    location.pathname = '/notfound'
  }, [])

  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="Извините, страница, которую вы посетили, удалена или не существует."
        extra={
          <Space>
            <Button href="/login" type="primary">
              Авторизоваться
            </Button>
            <Button href="/" type="primary">
              Вернуться на главную
            </Button>
          </Space>
        }
      />
    </>
  )
}
export { NotFound }
