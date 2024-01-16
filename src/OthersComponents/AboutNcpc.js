import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import logo_NCPC  from "../Assets/Images/Contents/logo_NCPC.jpeg"
function AboutNcpc() {
    return (
       <Container fluid="true" className="text-center aboutNcpc">
           <Row className="m-0 aboutNcpcRow">
               <h4 className="title pt-4 pb-5">ABOUT NCPC 2023</h4>
               <Col className="ncpcImgDiv m-0 p-0" md={12} lg={5} sm={12}>
                   <img src={logo_NCPC} alt="aboutNcpc"/>
               </Col>
               <Col className="aboutNcpcDescription" md={12} lg={7} sm={12}>
                   <h4 className="title text-dark mt-5 mb-4">National Collegiate Programming Contest NCPC 2023</h4>
                   <p className="alumniDescription">
                   National Collegiate Programming Contest NCPC is a prestigious programming contest organized at national level for enhancing programming capacity and problem solving skills among the university students in Bangladesh. It was patronized by Bangladesh Computer Council(BCC) in 1998.Since its inception, this competition has effectively ignited a passion for programming among the country's aspiring coders. This year, the Department of Computer Science and Engineering, Jahangirnagar University, is set to host the event NCPC 2023. With participants from over 100 universities across Bangladesh, this event is expected to be an exciting and highly competitive coding challenge.
                  </p>
               </Col>
           </Row>
       </Container>
    );
}

export default AboutNcpc;