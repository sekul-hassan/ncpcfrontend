import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import spns from "../Assets/Images/sponsor.png";

function Sponsor(props) {
    return (
        <Container fluid="true" className="text-center supportDiv mt-5">
            <Row className="m-0">
                <Col lg={6} md={6} sm={12}>
                    <h4 className="titleSponsor">Gold Sponsors</h4>
                    <a href="#abc" target="blank"><img className="supportImg" src={spns} alt=""/></a>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <h4 className="titleSponsor">Others Sponsors</h4>
                    <img className="supportImg" src={spns} alt=""/>
                </Col>
            </Row>
        </Container>
    );
}

export default Sponsor;