import React, {Fragment, useEffect, useState} from 'react';
import {Container, Table} from "react-bootstrap";
import axios from "axios";

function List({teamList}) {


    return (
       <Fragment>
          <Container fluid="true" className="p-3">
              <h3 className="text-dark text-center">List of Registered Team</h3>
              <Table striped bordered hover variant="light">
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
              </Table>
              {
                  !teamList && <div className="title text-center">Loading.....</div>
              }
          </Container>
       </Fragment>
    );
}

export default List;
