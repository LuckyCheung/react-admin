import React from "react";
import { Redirect } from "react-router-dom";

import PagesLogin from "./pages/Login/Login";
import PagesHome from "./pages/Home/Home";
import PagesNoMatch from "./pages/NoMatch/NoMatch";
import PagesHomeRole from "./pages/Role/Role";
import PagesHomeAuthority from "./pages/Authority/Authority";

const routes = [
  { path: "/", exact: true, render: () => <Redirect to="/Home"></Redirect> },
  { path: "/Login", component: PagesLogin },
  {
    path: "/Home",
    component: PagesHome,
    routes: [
      {
        path: "/Home/Role",
        component: PagesHomeRole,
        describe: {
          name: "角色",
        },
      },
      {
        path: "/Home/Authority",
        component: PagesHomeAuthority,
        describe: {
          name: "权力",
        },
      },
      {
        path: "*",
        component: PagesNoMatch,
      },
    ],
  },
  { path: "*", component: PagesNoMatch },
];

export default routes;
