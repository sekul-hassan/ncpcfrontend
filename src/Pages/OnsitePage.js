import { Table } from 'react-bootstrap';
import React from 'react';
import {Link} from "react-router-dom";

function OnsitePage() {
    const preliminaryContest = {
        onsiteCon: '08-09 March, 2024',
        mockDate: '08 March, 3:00 PM at Department of CSE, JU',
        mainDate: '09 March, 9:00 AM at Department of CSE, JU',
        paymentRegStart: '25 February, 2024',
        paymentRegEnd: '01 March, 2024',
        link: ''
        // Add more preliminary contests as needed
      };
    const containerStyle = {
        background: '#fff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px'
      };
    
      const tableStyle = {
        width: '60%',
        margin: '20px'
      };
    
      const textStyle = {
        fontSize: '18px',
        fontWeight: 'bold',
      };
    
      return (
        <div className='title text-center' style={containerStyle}>
          <Table bordered style={tableStyle}>
            <tbody>
              <tr>
                <td style={textStyle}>Onsite Contest Date</td>
                <td>{preliminaryContest.onsiteCon}</td>
              </tr>
              <tr>
                <td style={textStyle}>Oniste Mock Contest</td>
                <td>{preliminaryContest.mockDate}</td>
              </tr>
              <tr>
                <td style={textStyle}>Onsite Main Contest</td>
                <td>{preliminaryContest.mainDate}</td>
              </tr>
              <tr>
                <td style={textStyle}>Payment Registration Starts</td>
                <td>{preliminaryContest.paymentRegStart}</td>
              </tr>
              <tr>
                <td style={textStyle}>Last Date of Registration</td>
                <td>{preliminaryContest.paymentRegEnd}</td>
              </tr>
              <tr>
                <td style={textStyle}>Payment</td>
                <td><Link to="/payment">Payment</Link></td>
              </tr>
            </tbody>
          </Table>
          <div>
            <h3>Contest Rules:</h3>
            <p>Will Be published soon</p>
          </div>
          {/* <RegistrationButton buttonText="Standings" linksTo={preliminaryContest.link} /> */}
        </div>
      );
}

export default OnsitePage;