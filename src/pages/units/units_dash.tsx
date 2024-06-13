import { Box, Grid } from "@mui/material";
import KpiCardInfo from "../../components/kpi-card-info";
import CardMap from "../../components/card-map";
 
 
export const UnitsDash = () =>  {

   

  return (
    <main>
      <Box mt={2} mb={3}>
        <Grid container columnGap={3} rowGap={3}>
          <Grid item xs>
            <KpiCardInfo
              title="Unidades"
              description= "Operadores Activos : 10"
              route="/unidades"
            />
          </Grid>
          <Grid item xs>
            <KpiCardInfo
              title="Unidades en Reparación"
              description= "Vacantes : 2"
            />
          </Grid>
          <Grid item xs>
            <KpiCardInfo
              title="Llantas"
              description= "Temporales : 12"
            />
          </Grid>
          <Grid item xs>
            <CardMap
              title="Localización de Unidades"
              description= "Localizar una Unidad"
            />
          </Grid>
           
        </Grid>
      </Box>
    </main>
  );
}
