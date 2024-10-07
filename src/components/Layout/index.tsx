import { Breadcrumb, Layout, theme } from 'antd'
import { Navigation } from './Navigation'
import { HeaderLayout } from './Header'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Content } from 'antd/es/layout/layout'

const breadcrumbItems = [
  { label: 'Home', path: '/' },
  { label: 'Cars', path: '/cars' },
  { label: 'Colors', path: '/colors' },
  { label: 'Drivers', path: '/drivers' },
  { label: 'Language', path: '/language' },
  { label: 'Prices', path: '/prices' },
  { label: 'Regions', path: '/regions' },
  { label: 'Routes', path: '/routes' },
]

const MainLayout = () => {
  const { pathname } = useLocation()
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navigation />
      <Layout>
        <HeaderLayout />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb
            items={breadcrumbItems
              .filter((route) => pathname.includes(route.label.toLowerCase()))
              .map((item) => ({
                title: <Link to={item.path}>{item.label}</Link>,
              }))}
            style={{ margin: '16px 0' }}
          />
          <div
            style={{
              padding: 24,
              minHeight: 500,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout
