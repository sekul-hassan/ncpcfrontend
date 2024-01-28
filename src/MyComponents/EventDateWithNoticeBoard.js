import React from 'react';
import { Row, Container } from 'react-bootstrap';
import NoticeBoard from './NoticeBoard';


const styles = {
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
    { eventName: 'Preliminary Registration Ends', eventDate: 'February 15, 2024' },
    { eventName: 'Preliminary Contest', eventDate: 'February 20, 2024' },
    { eventName: 'Onsite Contest', eventDate: 'March 7-9, 2024' },
];

const EventDateWithNoticeBoard = () => {
  return (
    <div className='title' style={styles.container}>
        {eventList.map((event, index) => (
            <div style={styles.card}>
            <div style={styles.content}>
                <div style={styles.eventName}>{event.eventName}</div>
                <div style={styles.eventDate}>{event.eventDate}</div>
            </div>
            </div>
        ))}
        <div style={styles.notice}><NoticeBoard/></div>
    </div>
  );
};

export default EventDateWithNoticeBoard;
