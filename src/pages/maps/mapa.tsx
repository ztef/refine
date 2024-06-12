import React, { useState } from "react";
import { useApiUrl, useCustom } from "@refinedev/core";
import dayjs from "dayjs";
import { Box, Grid, Tab, Card, CardHeader, styled } from "@mui/material";
import KpiCard from "../../components/kpi-card";
import KpiCardMoney from "../../components/kpi-card-money";
import MyMap from "../../components/map";
import PieActiveArc from "../../components/pie";

import { IChart } from "../../interfaces";

const query = {
  start: dayjs().subtract(7, "days").startOf("day"),
  end: dayjs().startOf("day"),
};

const formatCurrency = Intl.NumberFormat("en", {
  style: "currency",
  currency: "USD",
});

export const Map = () =>  {

   

  interface ICounts {
  
    categories: number,
    unidades: number,
    unidades_ok: number,
    
  }
  
  const apiUrl = useApiUrl();
  
  const { data:totales } = useCustom<ICounts>({
    url: `${apiUrl}/dashboard/count`,
    method: "get",
    },
  );

  return (
    <main>
      <Box mt={2} mb={3}>
        <Grid container columnGap={3} rowGap={3}>
          
          <Grid item xs>
            <MyMap />
          </Grid>
          
           
        </Grid>
      </Box>
    </main>
  );
}
