import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import Line from "../Line/Line";
import { DownloadOutlined } from "@mui/icons-material";

const Row2 = () => {
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1} mt={3}>
      <Paper sx={{ border: "2px solid red", maxWidth: 1000, flexGrow: 1 }}>
        <Stack
          alignItems={"center"}
          direction={"row"}
          flexWrap={"wrap"}
          gap={1}
          mt={3}
          sx={{ justifyContent: "space-between" }}
        >
          <Box>
            <Typography
              variant="body1"
              color="info"
              fontWeight={"bold"}
              fontSize={30}
              ml={3}
            >
              Revenue Generated
            </Typography>

            <Typography variant="body1" color="info" fontWeight={"bold"} ml={3}>
              $59,342,32
            </Typography>
          </Box>

          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>

        <Line height={"280px"} />
      </Paper>

      <Box
        sx={{
          border: "2px solid red",
          height: "500px",
          width: "40vw",
          flexGrow: 1,
        }}
      >
        <Paper>
          <Typography variant="h6" color="info" fontWeight={"bold"} p={1.2}>
            Recent Transactions
          </Typography>
        </Paper>
      </Box>
    </Stack>
  );
};

export default Row2;
