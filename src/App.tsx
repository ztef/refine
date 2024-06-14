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

import { OperatorsDash } from "./pages/operators/operators_dash";
import { TripsDash } from "./pages/trips/trips_dash";
import { UnitsDash } from "./pages/units/units_dash";


import { Login } from "./pages/login";

import {Logo} from "./components/logo";

import "antd/dist/reset.css";
import { InvoicesDash } from "./pages/invoices/invoices_dash";
import { InsuranceDash } from "./pages/insurance/insurance_dash";
import { DeliveryDash } from "./pages/delivery/delivery_dash";
import { Header}  from "./components/header"; 

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
                name: "main",
                list: "/main",
                meta: { label: "Dashboard" },
              },
              {
                name : "recursos",
                meta: { label: "Recursos" },
              },
              

              {
                name : "invoices",
                list: "/invoices",
                meta: { label: "Facturas" },
              },


              {
                name : "negocios",
                meta: { label: "Unidades de Negocio" },
              },

              {
                name : "consolidados",
                meta: { label: "Consolidados" , parent: "negocios"},
              },

              {
                name : "trips",
                list: "/trips",
                meta: { label: "Viajes" , parent: "consolidados"},
              },


              
              {
                name: "categories",
                list: "/categories",
                meta: { label: "Tipos de Unidad", parent: "catalogos" },
              },

              {
                name: "operators",
                list: "/operators",
                meta: { label: "Operadores", parent: "recursos" },
              },

              {
                name: "units",
                list: "/units",
                meta: { label: "Unidades", parent: "recursos" },
              },

              {
                name: "insurance",
                list: "/insurance",
                meta: { label: "Seguros", parent: "recursos" },
              },
              
              {
                name: "delivery",
                list: "/delivery",
                meta: { label: "Paquetería", parent:"negocios"},
              },

              {
                name: "mapa",
                list: "/mapa",
                meta: { label: "Monitoreo" },
              },

              {
                name : "catalogos",
                options: {
                  label: "Hidden Resource",
                  hide: true,
                },
                meta: { label: "Catálogos" },
              },

              {
                name: "unidades",
                list: "/unidades",
                show: "/unidades/:id",
                edit: "/unidades/:id/edit",
                create: "/unidades/create",
                meta: { label: "Unidades" , parent: "catalogos"},
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
                        <Header />
                      <Outlet />
                    </ThemedLayoutV2>
                  </Authenticated>
                }
              >
                <Route
                  index
                  element={<NavigateToResource resource="main" />}
                />
                <Route path="/main">
                  <Route index element={<Main />} />
                </Route>

                <Route path="/trips">
                  <Route index element={<TripsDash />} />
                </Route>

                <Route path="/unidades">
                  <Route index element={<ListUnits />} />
                  <Route path=":id" element={<ShowUnit />} />
                  <Route path=":id/edit" element={<EditUnit />} />
                  <Route path="create" element={<CreateProduct />} />
                </Route>

                <Route path="/categories">
                  <Route index element={<ListCategories />} />
                </Route>

                <Route path="/operators">
                  <Route index element={<OperatorsDash />} />
                </Route>

                <Route path="/invoices">
                  <Route index element={<InvoicesDash />} />
                </Route>

                <Route path="/insurance">
                  <Route index element={<InsuranceDash />} />
                </Route>

                <Route path="/delivery">
                  <Route index element={<DeliveryDash />} />
                </Route>

              

                <Route path="/units">
                  <Route index element={<UnitsDash />} />
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

