import { useEffect, useState } from "react";
import * as React from 'react';
import TopMenu from "../Components/TopMenu";
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const columns = [
  // { field: 'id', headerName: 'ID', width: 100 },
  { field: 'teamName', headerName: 'Team Name', width: 500 },
  { field: 'instituteName', headerName: 'Institute Name', width: 600 },
  { field: 'transaction', headerName: 'Payment Status', width: 300 },
];


function OnsiteTeamList() {
  const headers =
  {
    "Client-Id": "1",
    "Client-Secret": "SECJUNCPCCOM2023000001",
  }

  const [selectedStatus, setSelectedStatus] = useState('Completed')
  const [teams, setTeams] = useState([])

  useEffect(() => {
    axios.post('https://pc.cse.juniv.edu/api/findTeamsByPaymentStatus', { keyword: selectedStatus }, { headers: headers })
      .then(response => {
        setTeams(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [selectedStatus]);
  

  const handleChange = (event) => {
    if(event.target.value && event.target.value.trim() !==''){
      setSelectedStatus(event.target.value);
    }
  };


  return (
    <>
      <div className="payment_status_grid">
        <Box sx={{ minWidth: 200, margin: '20px' }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Filter by</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              value={selectedStatus}
              label="Filter by"
              onChange={handleChange}
            >
              <MenuItem value={'Completed'}>Completed</MenuItem>
              <MenuItem value={'Pending'}>Pending</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <DataGrid className="mx-5 p_grid"
          rows={teams}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 20 },
            },
          }}
          pageSizeOptions={[20, 50, 100]}
        />
      </div>
    </>
  )
}

export default OnsiteTeamList;