
import { Card, Box, CardContent } from "@mui/material";
import { KpiCardInfoProps } from "../interfaces";

 

import MyMap from "../components/map";

 


export default function CardMap({
  title,
  description,
  route,
  
}: KpiCardInfoProps) {
  
   

  return (
    <Card elevation={3}>
       
        
        <CardContent>
            
            <span>{title}</span><br></br>
            <span>{description}</span>

        </CardContent>
         <CardContent>
            <MyMap />
           
        </CardContent>
       
     
    </Card>
  );
}
