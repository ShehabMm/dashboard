import { DataGrid  } from '@mui/x-data-grid';
import { columns, rows } from './Data';


const Team = () => {
  return (
    <div style={{ height: 600, width: '100%', }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

export default Team;
