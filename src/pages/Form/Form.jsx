import { Box, Button, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Form = () => {
  // eslint-disable-next-line no-unused-vars
  const theme = useTheme();
  const currencies = [
    {
      value: "User",
      label: "User",
    },
    {
      value: "Admin",
      label: "Admin",
    },
    {
      value: "Manager",
      label: "Manager",
    },
  ];

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "60vw", mx: "auto", display: "flex" },
      }}
      noValidate
      autoComplete="off"
    >
      <Box sx={{ display: "flex", gap: 5, justifyContent: "center" }}>
        <TextField fullWidth label="First Name" variant="filled" />
        <TextField fullWidth label="Last Name" variant="filled" />
      </Box>

      <Box sx={{ display: "flex", gap: 4, flexDirection: "column" }}>
        <TextField
          sx={{ display: "flex", mt: 5 }}
          label="Email"
          variant="filled"
        />
        <TextField label="Contact Nuber" variant="filled" />
        <TextField label="Adress1" variant="filled" />
        <TextField label="Adress2" variant="filled" />
        <TextField label="Adress2" variant="filled" />
        <TextField
          id="standard-select-currency-native"
          select
          label="Role"
          defaultValue="User"
          SelectProps={{
            native: true,
          }}
          helperText="Please select your position"
          variant="filled"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </Box>
      <Box sx={{  display:'flex', justifyContent:'center' }}>
        <Button type='submit'
          sx={{ color: "theme.palette.error.main", textAlign: "right" }}
          size="small"
          variant="contained"
        >
          Create New User
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
