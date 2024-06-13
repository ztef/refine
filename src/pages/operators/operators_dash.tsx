import { Box, Grid } from "@mui/material";
import KpiCardInfo from "../../components/kpi-card-info";
 


export const OperatorsDash = () =>  {

   

  return (
    <main>
      <Box mt={2} mb={3}>
        <Grid container columnGap={3} rowGap={3}>
          <Grid item xs>
            <KpiCardInfo
              title="Operadores"
              description= "Operadores Activos : 10"
            />
          </Grid>
          <Grid item xs>
            <KpiCardInfo
              title="Vacantes"
              description= "Vacantes : 2"
            />
          </Grid>
          <Grid item xs>
            <KpiCardInfo
              title="Operadores Temporales"
              description= "Temporales : 12"
            />
          </Grid>
           
        </Grid>
      </Box>
    </main>
  );
}
