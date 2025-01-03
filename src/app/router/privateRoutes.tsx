import Cars from "@/pages/cars";
import Colors from "@/pages/cars/colors";
import ColorAssign from "@/pages/cars/colors-assign";
import CarTypes from "@/pages/cars/types";
import { Clients } from "@/pages/clients";
import Drivers from "@/pages/drivers";
import RegistrationForm from "@/pages/drivers/registration";
import DriversTypes from "@/pages/drivers/types";
import Home from "@/pages/home";
import Languages from "@/pages/language";
import { Reason } from "@/pages/reason";
import { ReasonTranslations } from "@/pages/reason/translations";
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
    path: "/clients",
    element: <Clients />,
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
    path: "/cars/colors/assign",
    element: <ColorAssign />,
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
  { path: "/reason", element: <Reason /> },
  {
    path: "/reason/translations",
    element: <ReasonTranslations />,
  },
];
