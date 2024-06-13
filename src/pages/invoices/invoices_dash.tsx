import { Box, Grid } from "@mui/material";
import KpiCardInfo from "../../components/kpi-card-info";
 


export const InvoicesDash = () =>  {

   

  return (
    <main>
      <Box mt={2} mb={3}>
        <Grid container columnGap={3} rowGap={3}>
          <Grid item xs>
            <KpiCardInfo
              title="Nueva Factura"
              description= "Realizar una nueva Factura"
            />
          </Grid>
          <Grid item xs>
            <KpiCardInfo
              title="Consultar Facturas"
              description= "Facuras del Mes : 35"
            />
          </Grid>
          <Grid item xs>
            <KpiCardInfo
              title="Cancelar"
              description= "Facturas Canceladas : 3"
            />
          </Grid>
           
        </Grid>
      </Box>
    </main>
  );
}