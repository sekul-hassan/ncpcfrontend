import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import strategyImage1 from "../Assets/Images/dept/brain.png";
import strategyImage2 from "../Assets/Images/dept/graph.jpg"
import strategyImage3 from "../Assets/Images/dept/coding.jpg";

const StrategyCards = () => {
    const title1 = "THINK";
    const subTitle1 = "Critical Thinking";

    const title2 = "STRATEGIZE";
    const subTitle2 = "Algorithms & Data Structures";

    const title3 = "CODE";
    const subTitle3 = "Programming Languages & STL";

    const cardStyle = {
        height: '80%',
        textAlign: 'center',
        marginBottom: '20px',
        marginTop: '20px', // Add top margin
        borderRadius: '0', // Make the cards rectangular
        background: "#fff",
    };

  const imageStyle = {
    padding: "40px",
    height: '50%',
    width: '50%', // Adjust the width of the image
    margin: '0 auto', // Center the image horizontally
  };

  const headerStyle = {
    textAlign: 'center',
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: "#1a237e"
  };

  return (
    <Container>
      {/* Header Section */}
      <Row>
        <Col className='mt-5'>
            <h2 className="boldTitle" style={headerStyle}>NCPC 2023</h2>
        </Col>
      </Row>

      {/* Cards Section */}
      <Row className="justify-content-center">
        {/* First Card */}
        <Col md={4}>
          <Card style={cardStyle}>
            <Card.Img
              variant="top"
              src={strategyImage1}
              alt="Image 1"
              style={imageStyle}
            />
            <Card.Body className='title' style={{background: 'linear-gradient(45deg, #FF4081 30%, #FF9800 90%)'}}>
              <Card.Title className='mt-4'>{title1}</Card.Title>
              <Card.Text>
                {subTitle1}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Second Card */}
        <Col md={4}>
          <Card style={cardStyle}>
            <Card.Img
              variant="top"
              src={strategyImage2}
              alt="Image 2"
              style={imageStyle}
            />
            <Card.Body className='title' style={{background: 'linear-gradient(45deg, #FFD54F 30%, #FFB300 90%)'}}>
              <Card.Title className='mt-4'>{title2}</Card.Title>
              <Card.Text>
                {subTitle2}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Third Card */}
        <Col md={4}>
          <Card style={cardStyle}>
            <Card.Img
              variant="top"
              src={strategyImage3}
              alt="Image 3"
              style={imageStyle}
            />
            <Card.Body className='title' style={{background: 'linear-gradient(45deg, #8BC34A 30%, #CDDC39 90%)'}}>
              <Card.Title className='mt-4'>{title3}</Card.Title>
              <Card.Text>
                {subTitle3}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default StrategyCards;
