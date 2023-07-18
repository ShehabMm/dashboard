import { Box, TextField } from "@mui/material";

const Form = () => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '60vw' },
      }}
      noValidate
      autoComplete="off"
    >
      <Box sx={{display:'flex', gap:20, justifyContent:'center'}}>
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="filled-basic" label="Filled" variant="filled" />

      </Box>
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="filled-basic" label="Filled" variant="filled" />

    </Box>
  );
}

export default Form;
