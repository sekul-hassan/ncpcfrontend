import React from 'react';
import { Row, Col } from 'react-bootstrap';
import sponsorMockImage from "../Assets/Images/sponsor.png";
import logo_BS23 from "../Assets/Images/rsz_brain_station_23.jpg";
import ncc_logo from "../Assets/Images/ncc.PNG"

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
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    color: '#444',
  },
  
  image: {
    height: 'auto',
    width: '75%', // Adjust the width of the image
    objectFit:'cover'
  },

  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row', // Updated to make the cards flex in a row
    gap: '20px',
    marginTop: '40px',
  },
};

const PlatinumSponsorCard = (imageUrls ) => {
  return (
    <div>
      {/* <h1 className='text-center my-2'>Platinum</h1> */}

    <Row className='title m-5' style={styles.container}>
      <Col style={styles.card}>
        <div style={styles.content}>
          <img src={logo_BS23} style={styles.image} />
        </div>
      </Col>
      <Col style={styles.card}>
          <div style={styles.content}>
            <img src={ncc_logo} style={styles.image} />
          </div>
        </Col>
    </Row>
    </div>
  );
};

export default PlatinumSponsorCard;
