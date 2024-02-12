import { useEffect, useState } from "react";
import TopMenu from "../Components/TopMenu";
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';
import { Table } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'teamName', headerName: 'Team Name', width: 300 },
  { field: 'instituteName', headerName: 'Institute Name', width: 300 },
  { field: 'transaction', headerName: 'Payment Status', width: 130 },
];

// const rows = [
//   { id: 1, teamName: 'Gub_Legen_wait_for_it', instituteName: 'Green University of Bangladesh', transaction: 'COMPLETED' },
// ];;

export const TeamPaymentStatus = () => {
  const headers =
  {
    "Client-Id": "1",
    "Client-Secret": "SECJUNCPCCOM2023000001",
  }

  const [selectedStatus, setSelectedStatus] = useState('Completed')
  const [teams, setTeams] = useState([])

  const handleOnFilter = () => {
    axios.post('https://pc.cse.juniv.edu/api/findTeamsByPaymentStatus', { keyword: selectedStatus }, { headers: headers })
      .then(response => {
        setTeams(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    axios.post('https://pc.cse.juniv.edu/api/findTeamsByPaymentStatus', { keyword: selectedStatus }, { headers: headers })
      .then(response => {
        setTeams(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  return (
    <>
      <TopMenu />
      <div style={{ height: '100%', width: '100%' }}>
        <h3 className="my-5 text-center">Team Payment Status</h3>
        <DataGrid
          rows={teams}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 100 },
            },
          }}
          pageSizeOptions={[50, 100]}
          checkboxSelection
        />
      </div>
    </>
  )
}