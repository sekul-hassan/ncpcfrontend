import React from 'react';
import { Row, Col } from 'react-bootstrap';
import dSILogo from "../Assets/Images/DSI-Logo.png";
import logo_BS23 from "../Assets/Images/rsz_brain_station_23.jpg";
import ncc_logo from "../Assets/Images/ncc.PNG"
import therap from "../Assets/Images/therap.png"


const styles = {
  card: {
    width: '350px',
    maxWidth: '350px',
    height: '200px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },

  content: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    color: '#444',
  },

  image: {
    height: 'auto',
    width: '75%', // Adjust the width of the image
    objectFit: 'cover'
  },

  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row', // Updated to make the cards flex in a row
    gap: '20px',
    marginTop: '40px',
  },
};

const OtherSponsorCard = (imageUrls) => {
  imageUrls = [
    // sponsorMockImage,
    // sponsorMockImage,
    // sponsorMockImage,
  ];

  return (
    <div>
     
      <Row className='title m-5' style={styles.container}>
        <Col style={styles.card}>
          <div style={styles.content}>
            <img src={therap} style={styles.image} />
          </div>
        </Col>       
      </Row>
      <div className="mb-5"></div>
    </div>

  );
};

export default OtherSponsorCard;
