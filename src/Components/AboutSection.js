import React from 'react';
import {Container, Row,Carousel} from "react-bootstrap";
import _201 from "../Assets/Images/dept/lab_201.png";

import AboutCSEJU from '../MyComponents/AboutCSEJU';

function AboutSection(props) {

    const containerStyles = {
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <Container fluid="true" className="p-3" style={containerStyles}>
            <Row className="p-0 m-0"><AboutCSEJU/></Row>
        </Container>
    );
}

export default AboutSection;
