import { Box, Typography } from "@mui/material";

const MainTitle = ({subtitle, title}) => {


  return (
<Box sx={{mb:'30px'}}>
<Typography variant="h5" color="info.light" fontWeight={'bold'}>{title}</Typography>
<Typography variant="body1" color="warning">{subtitle}</Typography>


</Box>
  );
}

export default MainTitle;
