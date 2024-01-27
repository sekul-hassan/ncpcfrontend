import React from 'react';
import supportedByDigitalBangladesh from "../Assets/Images/digital-bangladesh.png";
import supportedByICTDivision from "../Assets/Images/ICT_Division.png";
import supportedByBCC from "../Assets/Images/bcc_logo.png";
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
    justifyContent: 'center',
    gap: '20px', // Adjust the gap between cards
    marginTop: '40px', // Add some top margin for spacing
  },
};

const imageList = [
    sponsorMockImage,
    sponsorMockImage,
    sponsorMockImage,
];

const headerStyle = {
    textAlign: 'center',
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: "#1a237e"
  };

const SilverSponsors = () => {
  return (
    <Col className='title mt-5'>
      <Row><h2 className="boldTitle" style={headerStyle}>Silver Sponsors</h2></Row>
      <Row style={styles.container}>{imageList.map((image, index) => (
        <div key={index} style={styles.card}>
          <div style={styles.content}>
            <img src={image} alt={`Image ${index + 1}`} style={styles.image} />
          </div>
        </div>
      ))}</Row>
    </Col>
  );
};

export default SilverSponsors;
