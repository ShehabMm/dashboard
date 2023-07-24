import {  Paper, Stack } from "@mui/material";
import PieChart from "../PieChart/PieChart";
import Bar from "../barChart/bar";
import Geography from "../Geography/Geography";

const Row3 = () => {
  return (
    <Stack  direction={'row'} flexWrap={'wrap'}  mt={1} sx={{mr:'auto', gap:2}}>
  <Paper sx={{flexGrow:1,    minWidth:'400px' }}>

    <PieChart height={'30vh'}/>
  </Paper>
  <Paper sx={{flexGrow:1,minWidth:'400px' }}>



  <Bar height={'30vh'}/>
  </Paper>
  <Paper sx={{flexGrow:1, minWidth:'400px'}}>
  <Geography  height={'30vh'}   />
    
    </Paper>    
    </Stack>
  );
}

export default Row3;
