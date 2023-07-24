import { Paper, Stack, Typography, useTheme } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { PointOfSale, Traffic } from "@mui/icons-material";
import {PersonAdd} from '@mui/icons-material'
import Chart from "./chart";
const Row1 = () => {
  const theme = useTheme();

  return (
    <Stack
      direction={"row"}
      gap={5}
      sx={{ flexWrap: "wrap", justifyContent: "center" }}
    >
      <Paper
        sx={{
          minWidth: "333px",
          padding: 1.5,
          display: "flex",
          justifyContent: "space-between",
          flexGrow:1

        }}
      >
        <Stack direction={"column"} gap={1}>
          <EmailIcon sx={{ color: theme.palette.secondary.main }} />
          <Typography variant="body1" color="theme.palette.text.primary">
            12,361
          </Typography>
          <Typography variant="body1" color="theme.palette.text.primary">
            Emails Sent
          </Typography>
        </Stack>

        <Stack direction={"column"}alignItems={'center'}  >
        <Chart scheme={'accent'}/>

          <Typography variant="body1" color="theme.palette.text.primary">
            +14%
          </Typography>
        </Stack>
      </Paper>

      <Paper
        sx={{
          minWidth: "333px",
          padding: 1.5,
          display: "flex",
          justifyContent: "space-between",
          flexGrow:1

        }}
      >
        <Stack direction={"column"} gap={1}>
          <PointOfSale sx={{ color: theme.palette.secondary.main }} />

          <Typography variant="body1" color="theme.palette.text.primary">
            12,361
          </Typography>
          <Typography variant="body1" color="theme.palette.text.primary">
            Emails Sent
          </Typography>
        </Stack>

        <Stack direction={"column"} alignItems={'center'}>
          <Chart scheme={'paired'}/>




          <Typography variant="body1" color="theme.palette.text.primary">
            +21%
          </Typography>
        </Stack>
      </Paper>

      <Paper
        sx={{
          minWidth: "333px",
          padding: 1.5,
          display: "flex",
          justifyContent: "space-between",
          flexGrow:1

        }}
      >
        <Stack direction={"column"} gap={1}>
          <PersonAdd sx={{ color: theme.palette.secondary.main }} />

          <Typography variant="body1" color="theme.palette.text.primary">
            12,361
          </Typography>
          <Typography variant="body1" color="theme.palette.text.primary">
            Emails Sent
          </Typography>
        </Stack>

        <Stack direction={"column"}   alignItems={'center'}>
      

          <Chart scheme={'nivo'}/>
          <Typography variant="body1" color="theme.palette.text.primary">
            +5%
          </Typography>
        </Stack>
      </Paper>

      <Paper
        sx={{
          minWidth: "333px",
          padding: 1.5,
          display: "flex",
          justifyContent: "space-between",
          flexGrow:1

        }}
      >
        <Stack direction={"column"} gap={1}>
          <Traffic sx={{ color: theme.palette.secondary.main }} />

          <Typography variant="body1" color="theme.palette.text.primary">
            12,361
          </Typography>
          <Typography variant="body1" color="theme.palette.text.primary">
            Emails Sent
          </Typography>
        </Stack>

        <Stack direction={"column"}  alignItems={'center'}>
        <Chart scheme={'category10'}/>

          <Typography variant="body1" color="theme.palette.text.primary">
            +43%
          </Typography>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default Row1;
