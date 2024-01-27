import React from 'react';
import { Row, Col } from 'react-bootstrap';
const HostedBy = () => {
  const infoStyle = {
    padding: "10px",
    borderRadius: '5px',
    background: 'linear-gradient(45deg, #FF5252 30%, #FF1744 90%)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    color: '#fff',
    textAlign: "center",
    cursor: 'default',
    fontSize: "24px",
    fontFamily: "Montserrat",
    fontWeight: 700,
  };

  const headerStyle = {
    textAlign: 'center',
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: "#1a237e"
  };


  const info = "Department of Computer Science and Engineering"

  return (
    <Col>
        <Row>
            <Col className='mt-5'>
                <h2 className="boldTitle" style={headerStyle}>Hosted By</h2>
            </Col>
        </Row>
        <Row>
        <div className='text-white' style={infoStyle}>
            Department of Computer Science and Engineering
        </div>
        </Row>
        <Row>
        <div className='text-white' style={infoStyle}>
            Jahangirnagar University
        </div>
        </Row>
    </Col>
  );
};

export default HostedBy;
