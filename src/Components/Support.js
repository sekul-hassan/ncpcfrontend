import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import digital from "../Assets/Images/digital-bangladesh.png";
import ict from "../Assets/Images/ICT_Division.png";
import bd from "../Assets/Images/bcc_logo.png";
import ju_cse from "../Assets/Images/dept/ju_cse.png";

function Support(props) {
    return (
        <Container fluid="true" className="text-center p-2">
            <Row className="m-0 p-0">
                <h4 className="boldTitle text-dark">Hosted By</h4>
                <div>
                    <img className="supportImgJU" src={ju_cse} alt=""/>
                </div>
            </Row>
            <Row className="mx-0 px-0 mt-5">
                <h4 className="titleSponsor text-dark mb-1">Supported By</h4>
                <Col sm={12} md={6} lg={4} className="mt-3 px-1">
                    <a href="https://www.digitalbangladesh.gov.bd/" target="blank">
                        <Card className="strategyWidth">
                            <Card.Body>
                                <img src={digital} alt="af" />
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col sm={12} md={6} lg={4} className="mt-3 px-1">
                    <a href="https://www.digitalbangladesh.gov.bd/" target="blank">
                        <Card className="strategyWidth">
                            <Card.Body>
                                <img src={ict} alt="af" />
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col sm={12} md={6} lg={4} className="mt-3 px-1">
                    <a href="https://www.digitalbangladesh.gov.bd/" target="blank">
                        <Card className="strategyWidth">
                            <Card.Body>
                                <img src={bd} alt="af" />
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default Support;