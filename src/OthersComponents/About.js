import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

function About() {

    return (
        <Container fluid="true" className="aboutJuBanner">
            <Row className="mx-0 px-0 overLay">
                <Col className="mx-0 px-0">
                    <div className="text-center overlayContent">
                        <h4 className="title text-light">About JU CSE</h4>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default About;