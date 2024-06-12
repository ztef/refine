import React from "react";
import { AuthPage } from "@refinedev/antd";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      formProps={{
        initialValues: {
          email: "ztef@hotmail.es",
          password: "12345678",
        },
      }}
    />
  );
};