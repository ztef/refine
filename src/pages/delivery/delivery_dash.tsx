import { Box, Grid } from "@mui/material";
import KpiCardInfo from "../../components/kpi-card-info";
 


export const DeliveryDash = () =>  {

   

  return (
    <main>
      <Box mt={2} mb={3}>
        <Grid container columnGap={3} rowGap={3}>
          <Grid item xs>
            <KpiCardInfo
              title="Paquetes en Tránsito"
              description= "Actuales : 75"
            />
          </Grid>
          <Grid item xs>
            <KpiCardInfo
              title="Paquetes Entregados"
              description= "En este Mes : 375"
            />
          </Grid>
          <Grid item xs>
            <KpiCardInfo
              title="Paquetes de Hoy"
              description= "Hoy : 123"
            />
          </Grid>
           
           
        </Grid>
      </Box>
    </main>
  );
}