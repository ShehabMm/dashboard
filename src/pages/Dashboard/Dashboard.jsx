import { Box, Button } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";

const Dashboard = () => {
  return (
    <Box>
      <Box sx={{textAlign:"right"}}>
<Button variant="contained" color="primary" sx={{textTransform:'capitalize'}}>
  Download reports
</Button>

      </Box>
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
};

export default Dashboard;
