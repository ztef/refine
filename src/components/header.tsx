import React from 'react';
import { PageHeader } from '@ant-design/pro-layout';
import { useLogout, useGetIdentity, useNavigation } from "@refinedev/core";



export  function Header() {

  const { data: identity } = useGetIdentity();

  return (
    <PageHeader
    className="site-page-header"
    
    subTitle={`Bienvenido, ${identity?.username ?? ""}`}
     
  />
  );
}


