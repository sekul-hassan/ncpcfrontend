import React from 'react';
import RegistrationButton from '../MyComponents/RegistrationButton';
import { Table } from 'react-bootstrap';

const preliminaryContest = {
  date: '20 February 2024',
  time: '5:00 PM',
  platform: 'Baps Online Judge',
  link: 'https://bapsoj.org/contests/ncpc-preliminary-ju-2023'
  // Add more preliminary contests as needed
};

const PreliminaryPage = () => {
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
            <td style={textStyle}>Preliminary Contest Date</td>
            <td>{preliminaryContest.date}</td>
          </tr>
          <tr>
            <td style={textStyle}>Time</td>
            <td>{preliminaryContest.time}</td>
          </tr>
          <tr>
            <td style={textStyle}>Contest Platform</td>
            <td>{preliminaryContest.platform}</td>
          </tr>
        </tbody>
      </Table>
      <RegistrationButton buttonText="Go to Contest" linksTo={preliminaryContest.link} />
    </div>
  );
};

export default PreliminaryPage;
