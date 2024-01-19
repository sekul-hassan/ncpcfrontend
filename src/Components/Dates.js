
import React from 'react';
import {Row, Col, Container, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendarDays} from "@fortawesome/free-solid-svg-icons";


const Dates = () => {
  return (
    <Container fluid="true" className="text-center dateDiv p-3">
       <Row className="mx-0">
           <Col className="mt-3" lg={4} md={4} sm={4}>
               <Card className="dateCard">
                   <Card.Body>
                       <span><FontAwesomeIcon icon={faCalendarDays} size="l"/></span>
                       <Card.Text>
                           <h4 className="title m-1">15 February 2024</h4>
                           <h4 className="description mt-3">Registration Deadline</h4>
                       </Card.Text>
                   </Card.Body>
               </Card>
           </Col>
           <Col className="mt-3" lg={4} md={4} sm={4}>
               <Card className="dateCard">
                   <Card.Body>
                       <span><FontAwesomeIcon icon={faCalendarDays} size="l"/></span>
                       <Card.Text>
                           <h4 className="title m-1">26 February 2024</h4>
                           <h4 className="description mt-3">Main Contest</h4>
                       </Card.Text>
                   </Card.Body>
               </Card>
           </Col>
           <Col className="mt-3" lg={4} md={4} sm={4}>
               <Card className="dateCard">
                   <Card.Body>
                       <span><FontAwesomeIcon icon={faCalendarDays} size="l"/></span>
                       <Card.Text>
                           <h4 className="title m-1">20 February 2024</h4>
                           <h4 className="description mt-3">Payment Deadline</h4>
                       </Card.Text>
                   </Card.Body>
               </Card>
           </Col>
       </Row>
    </Container>


  );
};

export default Dates;
