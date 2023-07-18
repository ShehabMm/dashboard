import { Box } from '@mui/material';
import { DataGrid  } from '@mui/x-data-grid';
import { rows, columns } from './Data';

const Invoices = () => {
  return (
    <Box sx={{ height: 600, width: '80%', 
    mx:"auto" , display:'flex', justifyContent:'center'}}>
      <DataGrid
      checkboxSelection
      rows={rows} 
// @ts-ignore
      columns={columns} />
    </Box>  );
}

export default Invoices;
