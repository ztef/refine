import { Refine, Authenticated } from "@refinedev/core";
import routerProvider, { NavigateToResource } from "@refinedev/react-router-v6";
import { ThemedLayoutV2, ThemedTitleV2, useNotificationProvider, } from "@refinedev/antd";

import { HashRouter, Routes, Route, Outlet } from "react-router-dom";


import { ConfigProvider, App as AntdApp } from "antd";

import { dataProvider } from "./providers/data-provider";
import { authProvider } from "./providers/auth-provider";

import { ShowUnit } from "./pages/units/show";
import { EditUnit } from "./pages/units/edit";
import { ListUnits } from "./pages/units/list";
import { CreateProduct } from "./pages/units/create";

import { ListCategories } from "./pages/categories/list";
import { Main } from "./pages/dashboard/main";
import { Map } from "./pages/maps/mapa";

import { Login } from "./pages/login";

import {Logo} from "./components/logo";

import "antd/dist/reset.css";

export default function App(): JSX.Element {
  return (
    <HashRouter>
      <ConfigProvider>
        <AntdApp>
          <Refine
            dataProvider={dataProvider}
            authProvider={authProvider}
            routerProvider={routerProvider}
            notificationProvider={useNotificationProvider}

            resources={[
              {
                name: "unidades",
                list: "/unidades",
                show: "/unidades/:id",
                edit: "/unidades/:id/edit",
                create: "/unidades/create",
                meta: { label: "Unidades" },
              },
              {
                name: "categories",
                list: "/categories",
                meta: { label: "Categories" },
              },
              {
                name: "main",
                list: "/main",
                meta: { label: "Main" },
              },
              {
                name: "mapa",
                list: "/mapa",
                meta: { label: "Mapas" },
              },
            ]}
          >
            <Routes>
              <Route
                element={
                  <Authenticated
                    key="authenticated-routes"
                    redirectOnFail="/login"
                  >
                    <ThemedLayoutV2
                      Title={(props) => (
                        <ThemedTitleV2 {...props} text="" 
                         icon = {<Logo />}
                        />
                      )}
                    >
                      <Outlet />
                    </ThemedLayoutV2>
                  </Authenticated>
                }
              >
                <Route
                  index
                  element={<NavigateToResource resource="main" />}
                />
                <Route path="/unidades">
                  <Route index element={<ListUnits />} />
                  <Route path=":id" element={<ShowUnit />} />
                  <Route path=":id/edit" element={<EditUnit />} />
                  <Route path="create" element={<CreateProduct />} />
                </Route>
                <Route path="/categories">
                  <Route index element={<ListCategories />} />
                </Route>
                <Route path="/main">
                  <Route index element={<Main />} />
                </Route>
                <Route path="/mapa">
                  <Route index element={<Map />} />
                </Route>
              </Route>
              <Route
                element={
                  <Authenticated key="auth-pages" fallback={<Outlet />}>
                    <NavigateToResource resource="main" />
                  </Authenticated>
                }
              >
                <Route path="/login" element={<Login />} />
              </Route>
            </Routes>
          </Refine>
        </AntdApp>
      </ConfigProvider>
    </HashRouter>
  );
}