import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { SaleList } from "./sale/SaleList";
import { SaleCreate } from "./sale/SaleCreate";
import { SaleEdit } from "./sale/SaleEdit";
import { SaleShow } from "./sale/SaleShow";
import { SaleDetailList } from "./saleDetail/SaleDetailList";
import { SaleDetailCreate } from "./saleDetail/SaleDetailCreate";
import { SaleDetailEdit } from "./saleDetail/SaleDetailEdit";
import { SaleDetailShow } from "./saleDetail/SaleDetailShow";
import { ItemList } from "./item/ItemList";
import { ItemCreate } from "./item/ItemCreate";
import { ItemEdit } from "./item/ItemEdit";
import { ItemShow } from "./item/ItemShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"AmplicationTest"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="Sale"
          list={SaleList}
          edit={SaleEdit}
          create={SaleCreate}
          show={SaleShow}
        />
        <Resource
          name="SaleDetail"
          list={SaleDetailList}
          edit={SaleDetailEdit}
          create={SaleDetailCreate}
          show={SaleDetailShow}
        />
        <Resource
          name="Item"
          list={ItemList}
          edit={ItemEdit}
          create={ItemCreate}
          show={ItemShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
