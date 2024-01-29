import React from 'react';
import { Row, Col } from 'react-bootstrap';
import sponsorMockImage from "../Assets/Images/sponsor.png";

const styles = {
  card: {
    width: '350px',
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
    color: '#fff',
  },
  
  image: {
    height: '50%',
    width: '50%', // Adjust the width of the image
  },

  container: {
    display: 'flex',
    flexDirection: 'row', // Updated to make the cards flex in a row
    gap: '20px',
    marginTop: '40px',
  },
};

const PlatinumSponsorCard = (imageUrls) => {
  return (
    <div>
    {/* <Row className='title m-5' style={styles.container}>
      <Col style={styles.card}>
        <div style={styles.content}>
          <img src={sponsorMockImage} style={styles.image} />
        </div>
      </Col>
      <Col style={styles.card}>
        <div style={styles.content}>
          <img src={sponsorMockImage} style={styles.image} />
        </div>
      </Col>
      <Col style={styles.card}>
        <div style={styles.content}>
          <img src={sponsorMockImage} style={styles.image} />
        </div>
      </Col>
    </Row>
    <Row className='title m-5' style={styles.container}>
      <Col style={styles.card}>
        <div style={styles.content}>
          <img src={sponsorMockImage} style={styles.image} />
        </div>
      </Col>
      <Col style={styles.card}>
        <div style={styles.content}>
          <img src={sponsorMockImage} style={styles.image} />
        </div>
      </Col>
      <Col style={styles.card}>
        <div style={styles.content}>
          <img src={sponsorMockImage} style={styles.image} />
        </div>
      </Col>
    </Row> */}
    </div>
  );
};

export default PlatinumSponsorCard;
