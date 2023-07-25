import {  Paper, Stack, Typography } from "@mui/material";
import PieChart from "../PieChart/PieChart";
import Bar from "../barChart/bar";
import Geography from "../Geography/Geography";

const Row3 = () => {
  return (
    <Stack  direction={'row'} flexWrap={'wrap'}  mt={3} sx={{mr:'auto', gap:2}}>
  <Paper sx={{flexGrow:1,    minWidth:'400px' }}>
<Typography variant="h4" color="info" p={5}>Campaign</Typography>
    <PieChart  height={'40vh'}/>
  </Paper>



  <Paper sx={{flexGrow:1,minWidth:'400px' }}>

  <Typography variant="h4" color="info" p={5}>Sales Quantity</Typography>


  <Bar height={'40vh'}/>
  </Paper>
  <Paper sx={{flexGrow:1, minWidth:'400px'}}>

  <Typography variant="h4" color="info" p={5}>Geography Based Traffic</Typography>

  <Geography  height={'40vh'}   />
    
    </Paper>    
    </Stack>
  );
}

export default Row3;
