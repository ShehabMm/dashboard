import { Box, Typography } from "@mui/material";



export const rows = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121*5454",
    access: "Admin",
  },


  {
    id: 2,
    name: "Dmi",
    email: "Dmi@gmail.com",
    age: 20,
    phone: "(665)121*3584",
    access: "Manager",
  },


  {
    id: 3,
    name: "Wick",
    email: "Wick@gmail.com",
    age: 26,
    phone: "(665)121*3987",
    access: "User",
  },

  {
    id: 4,
    name: "Martina",
    email: "Martina@gmail.com",
    age: 30,
    phone: "(665)121*3987",
    access: "Admin",
  },




];

export const columns = [
  { field: "id", headerName: "ID", width: 100, align:"center", headerAlign:"center" },
  { field: "name", headerName: "Name", width: 150 , align:"center", headerAlign:"center"},
  { field: "email", headerName: "Email", width: 150 , align:"center", headerAlign:"center"},
  { field: "age", headerName: "Age", width: 100, align:"center", headerAlign:"center" },
  { field: "phone", headerName: "Phone", width: 150, align:"center", headerAlign:"center" },
  { field: "access", headerName: "Access", width: 150,  align:"center", headerAlign:"center",
  
  renderCell:({row:{access}})=>{

    return(


<Box bgcolor='info.light'  sx={{px:3, borderRadius:2, width:150, textAlign:'center'}} >
<Typography   variant="body1" color="info"  >

{access}

</Typography>


</Box>
    )
  } },
];
