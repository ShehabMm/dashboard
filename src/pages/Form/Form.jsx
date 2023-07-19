import {  Alert, Box, Button,  Snackbar,  TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { useForm } from "react-hook-form";




const regEmail=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneReg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

const Form = () => {

  
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };



  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    console.log("done");
    handleClick()
  };

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
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        "& > :not(style)": { m: 1, width: "60vw", mx: "auto", display: "flex" },
      }}
      noValidate
      autoComplete="off"
    >
      <Box sx={{ display: "flex", gap: 5, justifyContent: "center" }}>
        <TextField
          fullWidth
          label="First Name"
          variant="filled"
          helperText={
            errors.firstName ? "This field is required & min 3 charaters" : null
          }
          error={Boolean(errors.firstName)}
          {...register("firstName", { required: true, minLength: 3 })}
        />
        <TextField fullWidth label="Last Name" variant="filled"
        
        helperText={
          errors.LastName ? "This field is required & min 3 charaters" : null
        }
        error={Boolean(errors.LastName)}
        {...register("LastName", { required: true, minLength: 3 })}

        
        />
      </Box>

      <Box sx={{ display: "flex", gap: 4, flexDirection: "column" }}>
        <TextField
          sx={{ display: "flex", mt: 5 }}
          label="Email"
          variant="filled"

          helperText={
            errors.email ? "Please provide a valid email address" : null
          }
          error={Boolean(errors.email)}
          {...register("email", { required: true,   pattern: regEmail  })}



        />
        <TextField label="Contact Nuber" variant="filled"
        
        helperText={
          errors.number ? "Please provide a valid phone number" : null
        }
        error={Boolean(errors.number)}
        {...register("number", { required: true,   pattern: phoneReg  })}

        
        
        />
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
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          type="submit"
          sx={{ color: "theme.palette.error.main", textAlign: "right" }}
          size="small"
          variant="contained"
        >
          Create New User
        </Button>


        <Snackbar 
        
        anchorOrigin={{ vertical:'top', horizontal:'right' }}

        
        open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>




      </Box>

    </Box>
  );
};

export default Form;
