import React from 'react';
import { Col, Container,Row } from 'react-bootstrap';

const Countdown = ({ countdownData }) => {
  if (!countdownData.isItBday) {
    return (
        <Container className="mt-4">
            <Row className='m-0 p-0 d-flex fixCountDown text-dark'>
                <Col className='countdown-box'>
                    <h5 className='countTxt'>{countdownData.days}</h5>
                    <h6 className='legend'>Days</h6>
                </Col>
                <Col className='countdown-box'>
                    <h5 className='countTxt'>{countdownData.hours}</h5>
                    <h6 className='legend'>Hours</h6>
                </Col>
                <Col className='countdown-box'>
                    <h5 className='countTxt'>{countdownData.minutes}</h5>
                    <h6 className='legend'>Minutes</h6>
                </Col>
                <Col className='countdown-box'>
                    <h5 className='countTxt'>{countdownData.seconds}</h5>
                    <h6 className='legend'>Seconds</h6>
                </Col>
            </Row>
        </Container>
    );
  }

};

export default Countdown;
