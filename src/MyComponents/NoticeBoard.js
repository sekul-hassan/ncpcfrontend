import React from 'react';
import { Link } from 'react-router-dom';

const NoticeBoard = () => {
  const boardStyle = {
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    marginLeft: '20px',
    marginBottom: '20px',
    width: '90%',
  };

  const headerCellStyle = {
    background: 'linear-gradient(45deg, #1a237e 30%, #283593 90%)', // Updated Bluish gradient background
    color: 'white',
    padding: '12px',
    textAlign: 'center',
    borderBottom: '1px solid #ddd',
  };

  const bodyCellStyle = {
    backgroundColor: 'white', // White background for body
    padding: '12px',
    textAlign: 'center',
    borderBottom: '1px solid #ddd',
  };

  const linkStyle = {
    textDecoration: 'none', // Remove link underline
    color: 'inherit', // Inherit the color from the parent
    fontSize: "14px",
  };

  // Replace this array with your list of notices
  const notices = [
    { id: 1, title: 'Registration Process', link: '/registration-process' },
    { id: 2, title: 'Transporation Schedule', link: '/transport' },
    { id: 3, title: 'Accomodation', link: '/accomodation' },
    { id: 4, title: 'Team Status', link: '/status' },
    // Add more notices as needed
  ];

  return (
    <div style={boardStyle}>
      <table style={{ width: '100%', borderCollapse: 'collapse', overflow: 'hidden' }}>
        <thead>
          <tr>
            <th className='title text-white' style={headerCellStyle}>Notice</th>
          </tr>
        </thead>
        <tbody>
          {notices.map((notice) => (
            <tr key={notice.id}>
              <td className='title' style={bodyCellStyle}>
                <Link to={notice.link} style={linkStyle}>{notice.title}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NoticeBoard;
