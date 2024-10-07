import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import {
  UserOutlined,
  DashboardOutlined,
  HomeOutlined,
  CarOutlined,
  BgColorsOutlined,
  BranchesOutlined,
  BankOutlined,
  TranslationOutlined,
} from '@ant-design/icons'

const { Sider } = Layout

const menutItems = [
  {
    key: '/',
    label: 'Главная',
    icon: <HomeOutlined />,
  },
  {
    key: '/drivers',
    label: 'Водители',
    icon: <UserOutlined />,
  },
  {
    key: '/cars',
    label: 'Машины',
    icon: <CarOutlined />,
  },
  {
    key: '/colors',
    label: 'Цвета машин',
    icon: <BgColorsOutlined />,
  },
  {
    key: '/regions',
    label: 'Регионы',
    icon: <BankOutlined />,
  },
  {
    key: '/routes',
    label: 'Маршруты',
    icon: <BranchesOutlined />,
  },
  {
    key: '/prices',
    label: 'Цены',
    icon: <DashboardOutlined />,
  },
  {
    key: '/languages',
    label: 'Языки',
    icon: <TranslationOutlined />,
  },
]

function Navigation() {
  const [collapsed, setCollapsed] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const onCollapse = () => setCollapsed(!collapsed)

  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{
          zIndex: 1000,
        }}
      >
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[pathname]}
          onClick={(e) => navigate(e.key)}
          items={menutItems}
        />
      </Sider>
    </>
  )
}
export { Navigation }
