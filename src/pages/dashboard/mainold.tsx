import { useState, useEffect } from "react";
import { DataProvider } from "@refinedev/core"; 
import { useCustom, useApiUrl } from "@refinedev/core";

import { Spin, Card } from "antd";

// Define the Main component
export const Main = () => {

  

interface ICounts {
  
  categories: number,
  unidades: number,
  
}

const apiUrl = useApiUrl();

const { data:totales } = useCustom<ICounts>({
  url: `${apiUrl}/dashboard/count`,
  method: "get",
  },
);

 


  // Render the main page
  return (
    <div>
      <h1>Main Page</h1>
       
      <div>
        
          <Card title="Total Mobiles" style={{ width: 300 }}>
            <p>{totales?.data.unidades ?? 0}</p>
          </Card>
           
        
      </div>
    </div>
  );
};

export default Main;
