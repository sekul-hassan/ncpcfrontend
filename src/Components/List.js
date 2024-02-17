import React, { Fragment, useEffect, useState } from 'react';
import { Container, Table } from "react-bootstrap";
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';


const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'teamName', headerName: 'Team Name', width: 500 },
    { field: 'instituteName', headerName: 'Institute Name', width: 600 },
    { field: 'transaction', headerName: 'Payment Status', width: 300 },
  ];


function List({ teamList }) {

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
    


    return (
        <Fragment>
            <Container fluid="true" className="p-3">
                <DataGrid className="mx-auto my-2 p_grid"
                    rows={teams}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 20 },
                        },
                    }}
                    pageSizeOptions={[20, 50, 100]}
                />
                {/* <h3 className="text-dark text-center">List of Registered Team</h3> */}
                {/*  <Table striped bordered hover variant="light">
                  <thead>
                  <tr>
                      <th>SL</th>
                      <th>Team Name</th>
                      <th>University Name</th>
                      <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  {
                      teamList && teamList.map((data, idx) => (
                          <tr key={idx}>
                              <td>{idx+1}</td>
                              <td>{data.teamName}</td>
                              <td>{data.instituteName}</td>
                              <td>Pending</td>
                          </tr>
                      ))
                  }
                  </tbody>
              </Table> */}
               
            </Container>
        </Fragment>
    );
}

export default List;
