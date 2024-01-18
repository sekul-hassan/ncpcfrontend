import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import spns from "../Assets/Images/sponsor.png";

function Sponsor(props) {
    return (
        <Container fluid="true" className="text-center p-2">
            <Row className="m-0">
                <Col lg={6} md={6} sm={12}>
                    <h4 className="titleSponsor mt-3">Gold Sponsors</h4>
                    <img className="supportImg mt-3" src={spns} alt=""/>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <h4 className="titleSponsor mt-3">Other Sponsors</h4>
                    <img className="supportImg mt-3" src={spns} alt=""/>
                </Col>
            </Row>
        </Container>
    );
}

export default Sponsor;