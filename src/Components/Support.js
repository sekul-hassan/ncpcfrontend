import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import digital from "../Assets/Images/digital-bangladesh.png";
import ict from "../Assets/Images/ICT_Division.png";
import bd from "../Assets/Images/bcc_logo.png";
import ju_cse from "../Assets/Images/dept/ju_cse.png";

function Support(props) {
    return (
        <Container fluid="true" className="text-center supportDiv mt-5">
            <Row className="m-0 p-0">
                <h4 className="boldTitle text-dark">Hosted By</h4>
                <div>
                    <img className="supportImgJU" src={ju_cse} alt=""/>
                </div>
            </Row>
            <Row className="mx-0 px-0 mt-5">
                <h4 className="titleSponsor text-dark mb-4">Supported By</h4>
                <Col sm={4} md={4} lg={4} className='supportCol'>
                <a href="https://www.digitalbangladesh.gov.bd/" target="blank"><img className="supportImg" src={digital} alt=""/></a>
                </Col>
                <Col sm={4} md={4} lg={4} className='supportCol'>
                <a href="https://ictd.gov.bd/" target="blank"><img className="supportImg" src={ict} alt=""/></a>
                </Col>
                <Col sm={4} md={4} lg={4} className='supportCol'>
                <a href="https://bcc.gov.bd/" target="blank"><img className="supportImg" src={bd} alt=""/></a>
                </Col>
            </Row>
        </Container>
    );
}

export default Support;