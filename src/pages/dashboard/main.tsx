import { useApiUrl, useCustom } from "@refinedev/core";
import { Box, Grid, Tab, Card, CardHeader, styled } from "@mui/material";
import KpiCard from "../../components/kpi-card";
import KpiCardMoney from "../../components/kpi-card-money";
import KpiCardPie from "../../components/kpi-card-pie";
import CardBar from "../../components/card-bar";
 


const formatCurrency = Intl.NumberFormat("en", {
  style: "currency",
  currency: "USD",
});

export const Main = () =>  {

   

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
        <Grid columns={3} container columnGap={3} rowGap={3}>
          <Grid item xs>
            <KpiCard
              title="Unidades Totales"
              total={totales?.data.unidades_ok  ?? 0}
              trend={totales?.data.unidades_ok  ?? 0}
              target={totales?.data.unidades  ?? 0}
               
            />
          </Grid>
          <Grid item xs>
            <KpiCardMoney
              title="Facturado de la Semana"
              total={985000  ?? 0}
              trend={990000  ?? 0}
              target={1000000}
              formatTotal={(value) => formatCurrency.format(value)}
              formatTarget={(value) => formatCurrency.format(value)}
            />
          </Grid>
           
          <Grid item xs>
            <KpiCardPie 
                title=" Distribucion de Unidades"
                description= "Distribucion por Tipo de Unidad"
                />
          </Grid>

          <Grid  item xs={6}>
            <CardBar
                title=" Ventas Acumuladas"
                description= "Ventas"
                />
          </Grid>
           
        </Grid>
      </Box>
    </main>
  );
}
