
import { Card, Box, CardContent } from "@mui/material";

import PieActiveArc from "../components/pie";

import { KpiCardInfoProps } from "../interfaces";

 


export default function KpiCardPie({
  title,
  description
  
}: KpiCardInfoProps) {
  

  return (
    <Card elevation={3}>
       
        <CardContent>
            <PieActiveArc />
           
        </CardContent>
         
       
      <Box sx={{ flexGrow: 1 }}>
        <CardContent>
          <span>{description}</span>
           
        </CardContent>
      </Box>
    </Card>
  );
}
