
import { Card, Box, CardContent, Typography, Chip } from "@mui/material";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useNavigate } from 'react-router-dom';

import { KpiCardInfoProps } from "../interfaces";

 
 


export default function KpiCardInfo({
  title,
  description,
  route,
  
}: KpiCardInfoProps) {

  const color = route ? "success" : "warning"

  const navigate = useNavigate();

  const handleIconClick = (event: React.MouseEvent) => {
     
    if(route){
        event.stopPropagation();
   
        navigate(route);
    }
  };
  

  return (
    <Card elevation={3}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          listStyle: "none",
          p: 0.5,
          m: 0,
        }}
      >
        <CardContent>
           
          <Typography
            variant="h4"
            sx={{ fontSize: 40, fontWeight: 700, mb: 0 }}
            color= "sucess"
          >
            {title}
          </Typography>
  
        </CardContent>
          <Chip
            icon={<ArrowCircleRightIcon />}
            color= {color}
            label={`Entrar`}
            onClick={handleIconClick}
          />
        <CardContent>


        </CardContent>

         
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <CardContent>
          <span>{description}</span>
          
           
        </CardContent>
      </Box>
    </Card>
  );
}
