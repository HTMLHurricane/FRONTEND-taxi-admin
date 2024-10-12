import Cars from "@/pages/cars";
import Colors from "@/pages/cars/colors";
import CarTypes from "@/pages/cars/types";
import Drivers from "@/pages/drivers";
import RegistrationForm from "@/pages/drivers/registration";
import DriversTypes from "@/pages/drivers/types";
import Home from "@/pages/home";
import Languages from "@/pages/language";
import Regions from "@/pages/regions";
import RegionTranslations from "@/pages/regions/translations";
import RegionsTypes from "@/pages/regions/types";
import Special from "@/pages/routes/special";
import Taxi from "@/pages/routes/taxi";
import RouteTypes from "@/pages/routes/types";

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
  {
    path: "/drivers/registration",
    element: <RegistrationForm />,
  },
  {
    path: "/drivers/types",
    element: <DriversTypes />,
  },
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
  {
    path: "/routes/taxi",
    element: <Taxi />,
  },
  {
    path: "/routes/special",
    element: <Special />,
  },
  {
    path: "/routes/types",
    element: <RouteTypes />,
  },
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
