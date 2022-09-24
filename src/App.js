import React,{useEffect,useState} from 'react';
import './App.css';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';




function App() {
const [userStateData,setUserStateData]=useState([]);
useEffect(()=>{
  async function getData(){
    const response= await axios.get("https://632afbeb713d41bc8e7cea33.mockapi.io/users");
    
    setUserStateData(response.data);
  }

  getData();

},[]);
return (
    <div style={{padding:"20px"}}>
      <h3> User Data</h3>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="name" label="Name" variant="standard" /><br/>
      <TextField id="age" label="Age" variant="standard" type="number"/><br/>
      <TextField id="email" label="Email" variant="standard" /><br/>
      <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
      <FormControl fullWidth>
  <InputLabel id="Courses">Courses</InputLabel>
  
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    
    label="Courses"
    
  >
    <MenuItem value="React">React</MenuItem>
    <MenuItem value="Node">Node</MenuItem>
    
  </Select>
</FormControl>
    </FormControl><br/>
    <Button variant="contained"type="submit">Submit</Button>
      </Box>
      <h3> User Form</h3>
      <TableContainer  component={Paper}>
      <Table sx={{ width: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">age</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">gender</TableCell>
            <TableCell align="right">course</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userStateData.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.courses}</TableCell>
              <TableCell>
              <Button variant="text">Edit</Button>
              <Button variant="text">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  

    </div>
  );
}

export default App;
