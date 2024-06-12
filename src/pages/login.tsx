import React from "react";
import { AuthPage } from "@refinedev/antd";
import { ThemedTitleV2 } from "@refinedev/antd";
import {Logo} from "../components/logo";


export const Login = () => {
  return (
    <AuthPage
      type="login"
      
      title={
        <ThemedTitleV2 collapsed={false}
         text="" 
          icon = {<Logo />}
          />
      }

      wrapperProps={{
        style: {
          background: "#ffffff",
        },
      }}

      formProps={{
        initialValues: {
          email: "ztef@hotmail.es",
          password: "12345678",
        },
      }}
    />
  );
};