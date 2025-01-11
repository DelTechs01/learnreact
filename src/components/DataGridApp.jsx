
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    height: 700,
    width: '100%',
    '& .MuiDataGrid-root': {
      backgroundColor: '#f5f5f5',
    },
    '& .MuiDataGrid-cell': {
      color: '#333',
    },
    '& .MuiDataGrid-columnHeaders': {
      backgroundColor: '#1976d2',
      color: 'black',
    },
  },
});

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  { field: 'age', headerName: 'Age', type: 'number', width: 130 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'city', headerName: 'City', width: 150 },
  {field: 'Position', headerName: 'Position', width: 200},
];

const rows = [
  { id: 1, firstName: 'Bleah', lastName: 'Malika', age: 22, email: 'blea.malique@example.com', city: 'New York', Position: 'Senior Software Engineer'},
  { id: 2, firstName: 'Jane', lastName: 'Smith', age: 27, email: 'jane.smith@example.com', city: 'Los Angeles',  Position: 'LLM Trainer' },
  { id: 3, firstName: 'Alice', lastName: 'Johnson', age: 25, email: 'alice.johnson@example.com', city: 'Chicago', Position:'Network Engineer' },
  { id: 4, firstName: 'Bob', lastName: 'Brown', age: 40, email: 'bob.brown@example.com', city: 'Houston', Position: 'Accountant' },
  { id: 5, firstName: 'Charlie', lastName: 'Davis', age: 45, email: 'charlie.davis@example.com', city: 'Phoenix', Position:'HR Manager' },
  { id: 6, firstName: 'David', lastName: 'Miller', age: 50, email: 'david.miller@example.com', city: 'Philadelphia' },
  { id: 7, firstName: 'Eve', lastName: 'Wilson', age: 23, email: 'eve.wilson@example.com', city: 'San Antonio' },
  { id: 8, firstName: 'Frank', lastName: 'Moore', age: 49, email: 'frank.moore@example.com', city: 'San Diego' },
  { id: 9, firstName: 'Grace', lastName: 'Taylor', age: 47, email: 'grace.taylor@example.com', city: 'Dallas' },
  { id: 10, firstName: 'Hank', lastName: 'Anderson', age: 38, email: 'hank.anderson@example.com', city: 'San Jose' },
  { id: 11, firstName: 'Ivy', lastName: 'Thomas', age: 55, email: 'ivy.thomas@example.com', city: 'Austin' },
  { id: 12, firstName: 'Jack', lastName: 'Jackson', age: 49, email: 'jack.jackson@example.com', city: 'Jacksonville' },
  { id: 13, firstName: 'Karen', lastName: 'White', age: 60, email: 'karen.white@example.com', city: 'Fort Worth' },
  { id: 14, firstName: 'Leo', lastName: 'Harris', age: 52, email: 'leo.harris@example.com', city: 'Columbus' },
  { id: 15, firstName: 'Mia', lastName: 'Martin', age: 40, email: 'mia.martin@example.com', city: 'Charlotte' },
  { id: 16, firstName: 'Nina', lastName: 'Garcia', age: 32, email: 'nina.garcia@example.com', city: 'San Francisco' },
  { id: 17, firstName: 'Oscar', lastName: 'Martinez', age: 57, email: 'oscar.martinez@example.com', city: 'Indianapolis' },
  { id: 18, firstName: 'Paul', lastName: 'Robinson', age: 63, email: 'paul.robinson@example.com', city: 'Seattle' },
  { id: 19, firstName: 'Quinn', lastName: 'Clark', age: 35, email: 'quinn.clark@example.com', city: 'Denver' },
  { id: 20, firstName: 'Rachel', lastName: 'Lewis', age: 67, email: 'rachel.lewis@example.com', city: 'Washington' },
];

const DataGridAp = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DataGrid rows={rows} columns={columns} pageSize={10} />
    </div>
  );
};

export default DataGridAp;