import { Box, Grid } from "@mui/material";
import KpiCardInfo from "../../components/kpi-card-info";
import CardMap from "../../components/card-map";
 


export const TripsDash = () =>  {

   

  return (
    <main>
      <Box mt={2} mb={3}>
        <Grid container columnGap={3} rowGap={3}>
          <Grid item xs>
            <KpiCardInfo
              title="Viajes en Proceso"
              description= "Total : 10"
            />
          </Grid>
          <Grid item xs>
            <KpiCardInfo
              title="Nuevo Viaje"
              description= "Generar un Nuevo viaje"
            />
          </Grid>
          <Grid item xs>
            <KpiCardInfo
              title="Viajes Terminados"
              description= "Viajes en el Mes : 12"
            />
          </Grid>
          <Grid item xs>

          <CardMap
              title="Estatus de Viajes"
              description= "Origen, destino y Localización Actual"
            />

          </Grid>
          
           
        </Grid>
      </Box>
    </main>
  );
}
