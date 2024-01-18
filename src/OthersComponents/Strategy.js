import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import StrategyCard from './StrategyCard';
import AlgorithmCard from './AlgorithmCard';
import CodeCard from './CodeCard';
import brain from "../Assets/Images/dept/brain.png";
import graph from "../Assets/Images/dept/graph.jpg"
import coding from "../Assets/Images/dept/coding.jpg";
function Strategy(props) {
    return (
        <Container fluid="true" className="mb-4 mt-0 text-center">
            <h2 className="boldTitle text-dark">NCPC 2023</h2>
            <Row className="mx-0">
                <Col className=" m-0" lg={4} md={4} sm={6}>
                    <StrategyCard think={brain}/>
                </Col>
                <Col className="m-0" lg={4} md={4} sm={6}>
                    <AlgorithmCard strategize={graph}/>
                </Col>
                <Col className="m-0" lg={4} md={4} sm={6}>
                    <CodeCard code={coding}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Strategy;
