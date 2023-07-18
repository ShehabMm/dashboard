import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows } from "./Data";
import { columns } from "./Data";

const Contacts = () => {
  return (
    <>  
    <Box sx={{ height: 600, width: '80%', 
    mx:"auto" , display:'flex', justifyContent:'center'}}>
       

      <DataGrid 
      slots={{ toolbar: GridToolbar }}
    
      rows={rows} 
// @ts-ignore
      columns={columns} />
    </Box> 
    
    
    </> );
}

export default Contacts;
