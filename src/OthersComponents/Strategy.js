import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import StrategyCard from './StrategyCard';
import brain from "../Assets/Images/dept/brain.png";
import graph from "../Assets/Images/dept/graph.jpg"
import coding from "../Assets/Images/dept/coding.jpg";
function Strategy(props) {
    const title1 = "THINK";
    const subTitle1 = "Critical Thinking";
    const description1 = "Analyze problems to formulate effective solutions.";

    const title2 = "STRATEGIZE";
    const subTitle2 = "Algorithms & Data Structures";
    const description2 = "Devise effective algorithms and strategies to formulate optimal solutions.";

    const title3 = "CODE";
    const subTitle3 = "Programming Languages & STL";
    const description3 = "Craft efficient and optimized solutions using STL and programming languages.";

    return (
        <Container fluid="true" className="mb-4 mt-0 text-center">
            <h2 className="boldTitle text-dark">NCPC 2023</h2>
            <Row className="mx-0">
                <Col className=" m-0" lg={4} md={4} sm={6}>
                    <StrategyCard pic={brain} title={title1} subTitle={subTitle1} description={description1}/>
                </Col>
                <Col className="m-0" lg={4} md={4} sm={6}>
                    <StrategyCard pic={graph} title={title2} subTitle={subTitle2} description={description2}/>
                </Col>
                <Col className="m-0" lg={4} md={4} sm={6}>
                    <StrategyCard pic={coding} title={title3} subTitle={subTitle3} description={description3}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Strategy;
