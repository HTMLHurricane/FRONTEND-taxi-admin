import Cars from "@/pages/cars";
import Colors from "@/pages/cars/colors";
import CarTypes from "@/pages/cars/types";
import Drivers from "@/pages/drivers";
import Home from "@/pages/home";
import Languages from "@/pages/language";
import Prices from "@/pages/prices";
import Regions from "@/pages/regions";
import RegionTranslations from "@/pages/regions/translations";
import RegionsTypes from "@/pages/regions/types";
import Routes from "@/pages/routes";

export const privateRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/languages",
    element: <Languages />,
  },
  {
    path: "/drivers",
    element: <Drivers />,
  },
  // машины
  {
    path: "/cars",
    element: <Cars />,
  },
  {
    path: "/cars/colors",
    element: <Colors />,
  },
  {
    path: "/cars/types",
    element: <CarTypes />,
  },
  // маршруты
  {
    path: "/routes",
    element: <Routes />,
  },
  // цены
  {
    path: "/prices",
    element: <Prices />,
  },
  // регионы
  {
    path: "/regions",
    element: <Regions />,
  },
  {
    path: "/regions/translations",
    element: <RegionTranslations />,
  },
  {
    path: "/regions/types",
    element: <RegionsTypes />,
  },
];
