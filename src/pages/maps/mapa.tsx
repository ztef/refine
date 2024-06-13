

import { Box, Grid } from "@mui/material";

import MyFullMap from "../../components/map_full";





export const Map = () =>  {

   

  

  return (
    <main>
      <Box mt={1} mb={1}>
        <Grid container columnGap={3} rowGap={3}>
          
          <Grid item xs>
            <MyFullMap />
          </Grid>
          
           
        </Grid>
      </Box>
    </main>
  );
}
