
import React from 'react';
import {Row, Col, Container, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendarDays} from "@fortawesome/free-solid-svg-icons";
import {event1, event2, event3} from "./Context/WebConf";


const Dates = () => {
  return (
    <Container fluid="true" className="text-center m-3 px-3 pb-4 pt-3">
       <Row className="mx-0">
           <Col className="mt-3" lg={4} md={4} sm={4}>
               <Card className="dateCard">
                   <Card.Body>
                       <span><FontAwesomeIcon icon={faCalendarDays} size="l"/></span>
                       <Card.Text>
                           <h4 className="title m-1">{event1.date}</h4>
                           <h4 className="description mt-3">{event1.name}</h4>
                       </Card.Text>
                   </Card.Body>
               </Card>
           </Col>
           <Col className="mt-3" lg={4} md={4} sm={4}>
               <Card className="dateCard">
                   <Card.Body>
                       <span><FontAwesomeIcon icon={faCalendarDays} size="l"/></span>
                       <Card.Text>
                           <h4 className="title m-1">{event2.date}</h4>
                           <h4 className="description mt-3">{event2.name}</h4>
                       </Card.Text>
                   </Card.Body>
               </Card>
           </Col>
           <Col className="mt-3" lg={4} md={4} sm={4}>
               <Card className="dateCard">
                   <Card.Body>
                       <span><FontAwesomeIcon icon={faCalendarDays} size="l"/></span>
                       <Card.Text>
                           <h4 className="title m-1">{event3.date}</h4>
                           <h4 className="description mt-3">{event3.name}</h4>
                       </Card.Text>
                   </Card.Body>
               </Card>
           </Col>
       </Row>
    </Container>


  );
};

export default Dates;
