import React from 'react';

const NoticeBar = ({ text }) => {
  const styles = {
    noticeBarContainer: {
      width: '100%',
      overflow: 'hidden',
      background: 'linear-gradient(45deg, #FF4081 30%, #FF9800 90%)', // Slightly darker orangish gradient
      padding: '5px', // Add some padding for better visibility
    },
    noticeBarText: {
      fontSize: '18px',
      color: '#fff',
      whiteSpace: 'nowrap',
      animation: 'slide-in 15s linear infinite',
    },
  };

  return (
    <div style={styles.noticeBarContainer}>
      <marquee style={styles.noticeBarText} behavior="scroll" direction="left" scrollamount="6">
        {text}
      </marquee>
    </div>
  );
};

export default NoticeBar;
