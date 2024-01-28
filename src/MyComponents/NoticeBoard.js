import React from 'react';
import { NavLink } from 'react-router-dom';
import './NoticeBoard.css'; // Import the external CSS file

const NoticeBoard = () => {
  const boardStyle = {
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    marginBottom: '20px',
    width: '350px',
  };

  const headerCellStyle = {
    background: 'linear-gradient(45deg, #FF5252 30%, #FF1744 90%)',
    color: 'white',
    padding: '12px',
    textAlign: 'center',
    borderBottom: '1px solid #ddd',
  };

  const bodyCellStyle = {
    backgroundColor: 'white',
    padding: '12px',
    textAlign: 'center',
    borderBottom: '1px solid #ddd',
  };

  // Replace this array with your list of notices
  const notices = [
    { id: 1, title: 'Registration Process', link: '/registration-process' },
    { id: 2, title: 'Transportation Schedule', link: '/transport' },
    { id: 3, title: 'Accommodation', link: '/accomodation' },
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
                <NavLink to={notice.link} className='notice-link' activeClassName='notice-link-active'>
                  {notice.title}
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NoticeBoard;

// import { Link } from 'react-router-dom';

// const NoticeBoard = () => {
//     const boardStyle = {
//     borderRadius: '10px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     overflow: 'hidden',
//     marginLeft: '20px',
//     marginBottom: '20px',
//     width: "350px",
//   };

//   const headerCellStyle = {
//     background: 'linear-gradient(45deg, #FF5252 30%, #FF1744 90%)',
//     color: 'white',
//     padding: '12px',
//     textAlign: 'center',
//     borderBottom: '1px solid #ddd',
//       };

//   const bodyCellStyle = {
// backgroundColor: 'white', // White background for body
//     padding: '12px',
//     textAlign: 'center',
//     borderBottom: '1px solid #ddd',
//       };

//   const linkStyle = {
//     textDecoration: 'none', // Remove link underline
//     color: 'inherit', // Inherit the color from the parent
//     fontSize: "14px",
//   };

//   // Replace this array with your list of notices
//   const notices = [
//     { id: 1, title: 'Registration Process', link: '/registration-process' },
//     { id: 2, title: 'Transportation Schedule', link: '/transport' },
//     { id: 3, title: 'Accommodation', link: '/accomodation' },
//     { id: 4, title: 'Team Status', link: '/status' },
//     // Add more notices as needed
//   ];

//   return (
//     <div style={boardStyle}>
//       <table style={{ width: '100%', borderCollapse: 'collapse', overflow: 'hidden' }}>
//         <thead>
//           <tr>
//             <th className='title text-white' style={headerCellStyle}>Notice</th>
//           </tr>
//         </thead>
//         <tbody>
//           {notices.map((notice) => (
//             <tr key={notice.id}>
//               <td className='title' style={bodyCellStyle}>
//                 <Link to={notice.link} style={linkStyle}>{notice.title}</Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default NoticeBoard;
