import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import Line from "../Line/Line";
import { DownloadOutlined } from "@mui/icons-material";

const Row2 = () => {
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={2} mt={3}>
      <Paper sx={{maxWidth: '100vw', flexGrow: 1, height:'51.5vh', minWidth:'400px' }}>
        <Stack
          alignItems={"center"}
          direction={"row"}
          flexWrap={"wrap"}
          flexGrow={1}
          gap={1}
          mt={3}
          sx={{ justifyContent: "space-between" }}
        >
          <Box sx={{display:'flex',  flexGrow:1}}>
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
          height: "500px",
          width: "40vw",
          flexGrow: 1,
        }}
      >
        <Paper sx={{p:4 }}>
          <Typography variant="h6" color="info" fontWeight={"bold"} >
            Recent Transactions
          </Typography>
        </Paper>
<Stack sx={{ maxHeight:{xs:'38vh', l:'500vh'}, overflow:'auto'  }} >
  
  
  <Paper sx={{mt:2, p:3.5}}>
<Stack direction={'row'} justifyContent={'space-between'} mx={2}>
<Typography variant="h6" color="info">0315dsaaf</Typography>
<Typography variant="h6" color="info">2023-04-01</Typography>
<Typography  sx={{backgroundColor:'orangered',px:1}} variant="h6" color="info">$133.91</Typography>
</Stack>


</Paper>
<Paper sx={{mt:2, p:3.5}}>
<Stack direction={'row'} justifyContent={'space-between'} mx={2}>
<Typography variant="h6" color="info">1520deefr</Typography>
<Typography variant="h6" color="info">2023-06-01</Typography>
<Typography  sx={{backgroundColor:'orangered',px:1}} variant="h6" color="info">$133.91</Typography>
</Stack>


</Paper>
<Paper sx={{mt:2, p:3.5}}>
<Stack direction={'row'} justifyContent={'space-between'} mx={2}>
<Typography variant="h6" color="info">1370grrtyf</Typography>
<Typography variant="h6" color="info">2023-07-01</Typography>
<Typography  sx={{backgroundColor:'orangered',px:1}} variant="h6" color="info">$133.91</Typography>
</Stack>


</Paper>

<Paper sx={{mt:2, p:3.5}}>
<Stack direction={'row'} justifyContent={'space-between'} mx={2}>
<Typography variant="h6" color="info">8915ds84f</Typography>
<Typography variant="h6" color="info">2023-04-01</Typography>
<Typography  sx={{backgroundColor:'orangered',px:1}} variant="h6" color="info">$133.91</Typography>
</Stack>


</Paper>



<Paper sx={{mt:2, p:3.5}}>
<Stack direction={'row'} justifyContent={'space-between'} mx={2}>
<Typography variant="h6" color="info">8914fv84fk</Typography>
<Typography variant="h6" color="info">2023-08-01</Typography>
<Typography  sx={{backgroundColor:'orangered',px:1}} variant="h6" color="info">$133.91</Typography>
</Stack>


</Paper>

</Stack>
     
      </Box>
    </Stack>
  );
};

export default Row2;
