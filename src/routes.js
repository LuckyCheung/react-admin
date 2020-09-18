import React from "react";
import { Redirect } from "react-router-dom";

import {
  AppstoreOutlined,
  UserOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

import PagesLogin from "./pages/Login/Login";
import PagesHome from "./pages/Home/Home";
import PagesNoMatch from "./pages/NoMatch/NoMatch";
import PagesHomeRole from "./pages/Role/Role";
import PagesHomeUser from "./pages/User/User";
import PagesHomeAuthority from "./pages/Authority/Authority";

const adminRoutes = [
  {
    name: "用户列表",
    path: "/Home/User",
    component: PagesHomeUser,
    meta: {
      requiresAuth: true,
      isNav: true,
      icon: <AppstoreOutlined />,
    },
  },
  {
    name: "角色列表",
    path: "/Home/Role",
    component: PagesHomeRole,
    meta: {
      requiresAuth: true,
      isNav: true,
      icon: <AppstoreOutlined />,
    },
  },
  {
    name: "权限列表",
    path: "/Home/Authority",
    component: PagesHomeAuthority,
    meta: {
      requiresAuth: true,
      isNav: true,
      icon: <AppstoreOutlined />,
    },
  },
];

const goodsRoutes = [
  {
    name: "用户列表",
    path: "/Home/User",
    component: PagesHomeUser,
    meta: {
      requiresAuth: true,
      isNav: true,
      icon: <AppstoreOutlined />,
    },
  },
  {
    name: "角色列表",
    path: "/Home/Role",
    component: PagesHomeRole,
    meta: {
      requiresAuth: true,
      isNav: true,
      icon: <AppstoreOutlined />,
    },
  },
  {
    name: "权限列表",
    path: "/Home/Authority",
    component: PagesHomeAuthority,
    meta: {
      requiresAuth: true,
      isNav: true,
      icon: <AppstoreOutlined />,
    },
  },
];

const subRoutes = [
  ...adminRoutes,
  ...goodsRoutes,
  {
    name: "404",
    path: "*",
    component: PagesNoMatch,
    meta: {},
  },
];

const subNavs = [
  {
    group: "user",
    title: "用户中心",
    children: adminRoutes,
    icon: <UserOutlined />,
  },
  {
    group: "goods",
    title: "商品中心",
    children: goodsRoutes,
    icon: <ShoppingOutlined />,
  },
];

const routes = [
  {
    name: "默认",
    path: "/",
    exact: true,
    render: () => <Redirect to="/Home"></Redirect>,
    meta: {},
  },
  {
    name: "登录",
    path: "/Login",
    component: PagesLogin,
    meta: {},
  },
  {
    name: "首页",
    path: "/Home",
    component: PagesHome,
    meta: {},
    children: subRoutes,
    navs: subNavs,
  },
  {
    name: "404",
    path: "*",
    component: PagesNoMatch,
    meta: {},
  },
];

export default routes;
