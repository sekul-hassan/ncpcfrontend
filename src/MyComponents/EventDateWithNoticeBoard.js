import React from 'react';
import { Row, Container } from 'react-bootstrap';
import NoticeBoard from './NoticeBoard';
import RegistrationButton from './RegistrationButton';

const styles = {
  previousEventDate: {
    fontSize: '14px',
    textAlign: 'center',
    textDecoration: 'line-through'
  },
  previousEventDate2: {
    fontSize: '14px',
    textAlign: 'center',
  },
  card: {
    width: '350px',
    height: '268px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'default',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  notice: {
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  content: {
    padding: '16px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    background: 'linear-gradient(45deg, #1a237e 30%, #283593 90%)', // Gradient background
    color: '#fff',
  },
  eventName: {
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '8px',
  },
  eventDate: {
    fontSize: '14px',
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px', // Adjust the gap between cards
    marginTop: '40px', // Add some top margin for spacing
    flexWrap: 'wrap', // Allow cards to wrap on smaller screens
  },
};

const eventList = [
  { eventName: 'Registration (Onsite)', eventDate: 'Starts in few days', previousEventDate: '' },
  { eventName: 'Onsite Contest', eventDate: 'March 7-9, 2024', previousEventDate: '' },
];

const EventDateWithNoticeBoard = () => {
  return (
    <div className='title' style={styles.container}>
        {/* event 1 */}
        <div style={styles.card}>
            <div style={styles.content}>
                <div style={styles.eventName}>Registraion (Onsite)</div>
                <div style={styles.eventDate}>Starts soon</div>
            </div>
          </div>

          {/* event 2 */}
          <div style={styles.card}>
            <div style={styles.content}>
                <div style={styles.eventName}>Preliminary Standings</div>
                <RegistrationButton buttonText="Standings" linksTo="https://bapsoj.org/contests/ncpc-preliminary-ju-2023/standings"/>
            </div>
          </div>

          {/* event 3 */}
          <div style={styles.card}>
            <div style={styles.content}>
                <div style={styles.eventName}>Onsite Contest</div>
                <div style={styles.eventDate}>March 7-9, 2024</div>
            </div>
          </div>
        <div style={styles.notice}><NoticeBoard/></div>
    </div>
  );
};

export default EventDateWithNoticeBoard;
