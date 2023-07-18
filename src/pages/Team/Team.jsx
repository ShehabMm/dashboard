import { Box } from '@mui/material';
import { DataGrid  } from '@mui/x-data-grid';
import { columns, rows } from './Data';


const Team = () => {











   
  return (
    <Box sx={{ height: 600, width: '80%', 
    mx:"auto" , display:'flex', justifyContent:'center'}}>
      <DataGrid rows={rows} 
// @ts-ignore
      columns={columns} />
    </Box>
  );
}

export default Team;
