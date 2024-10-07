import Cars from '@/pages/cars'
import Colors from '@/pages/colors'
import Drivers from '@/pages/drivers'
import Home from '@/pages/home'
import Languages from '@/pages/language'
import Prices from '@/pages/prices'
import Regions from '@/pages/regions'
import Routes from '@/pages/routes'

export const privateRoutes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/languages',
    element: <Languages />,
  },
  {
    path: '/cars',
    element: <Cars />,
  },
  {
    path: '/drivers',
    element: <Drivers />,
  },
  {
    path: '/colors',
    element: <Colors />,
  },
  {
    path: '/routes',
    element: <Routes />,
  },
  {
    path: '/prices',
    element: <Prices />,
  },
  {
    path: '/regions',
    element: <Regions />,
  },
]
