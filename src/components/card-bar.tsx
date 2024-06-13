
import { Card, Box, CardContent } from "@mui/material";
import { KpiCardInfoProps } from "../interfaces";

 

import ChartsOverviewDemo from "../components/bar_chart";

 


export default function CardBar({
  title,
  description,
  route,
  
}: KpiCardInfoProps) {
  
   

  return (
    <Card elevation={3}>
       
        <CardContent>
            <ChartsOverviewDemo />
           
        </CardContent>
        <CardContent>
            
            <span>{title}</span><br></br>
            <span>{description}</span>

        </CardContent>
         
       
     
    </Card>
  );
}
