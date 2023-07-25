import { Box, Button, Stack } from "@mui/material";
import MainTitle from "../../components/mainTitle";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";

const Dashboard = () => {
  return (
    <Box>
      <Stack direction={'row'} sx={{ justifyContent:'space-between', alignItems:'center' }}>
        <MainTitle subtitle={"Welcome to your dashboard"} title={"Dashboard"} />

        <Button
          variant="contained"
          color="primary"
          sx={{ textTransform: "capitalize" }}
        >
          Download reports
        </Button>
      </Stack>

      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
};

export default Dashboard;
