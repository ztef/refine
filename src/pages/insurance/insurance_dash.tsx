import { Box, Grid } from "@mui/material";
import KpiCardInfo from "../../components/kpi-card-info";
 


export const InsuranceDash = () =>  {

   

  return (
    <main>
      <Box mt={2} mb={3}>
        <Grid container columnGap={3} rowGap={3}>
          <Grid item xs>
            <KpiCardInfo
              title="Pólizas Activas"
              description= "Vigentes : 75"
            />
          </Grid>
          <Grid item xs>
            <KpiCardInfo
              title="Pólizas por Vencer"
              description= "Vencen en este Mes : 5"
            />
          </Grid>
           
           
        </Grid>
      </Box>
    </main>
  );
}