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
        <Container fluid="true" className="mb-4">
            <Container fluid="true" className="StrategyBody text-center">
                <Container fluid="true" className="StrategyTitleBorder mt-5">
            {/* <h6>Brace yourselves, Programmers, for the National Programming Spectacle!</h6> */}
            <h2 className="StrategyTitleBorder2">NCPC 2023</h2>
            </Container>
            
            <Row className="mt-5 p-0 mx-0">
                <Col className="StrategyCardsCol m-0" lg={4} md={4} sm={6}>
                    <StrategyCard think={brain}/>
                </Col>
                <Col className="StrategyCardsCol m-0" lg={4} md={4} sm={6}>
                    <AlgorithmCard strategize={graph}/>
                </Col>
                <Col className="StrategyCardsCol m-0" lg={4} md={4} sm={6}>
                    <CodeCard code={coding}/>
                </Col>
            </Row>
            </Container>
        </Container>
    );
}

export default Strategy;
