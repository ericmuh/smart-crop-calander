import Dashboard from "views/Dashboard.js";
import Sunshine from "views/Sunshine.js";
import MonthTableList from "views/MonthTableList.js";
import SeasonTableList from "views/SeasonTableList.js";
import Icons from "views/Icons.js";
import Notifications from "views/Notifications.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Overview",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/season",
    name: "Seasonal Precipitation",
    icon: "nc-icon nc-air-baloon",
    component: SeasonTableList,
    layout: "/admin",
  },
  {
    path: "/monthly",
    name: "Monthly Precipation",
    icon: "nc-icon nc-air-baloon",
    component: MonthTableList,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "SunShine",
    icon: "nc-icon nc-sun-fog-29",
    component: Sunshine,
    layout: "/admin",
  },

  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-atom",
  //   component: Icons,
  //   layout: "/admin",
  // },

  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
];

export default dashboardRoutes;
