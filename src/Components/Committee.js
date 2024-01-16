import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ChoyonSirCard from "./ChoyonSirCard";

function Committee(props) {

    const images = require.context('../Assets/Images/Executive', true);
    const imageUrls = images.keys().map((image) => images(image));

    const executiveNameList = [
        "Prof. Dr. Md. Golam Moazzam",
        "Mohammad Ashraful Islam",
        "Prof. Dr. Jugal Krishna Das",
        "Prof. Dr. Md. Imdadul Islam",
        "Prof. Dr. Md. Abul Kalam Azad",
        "Prof. Dr. ASM Mostafizur Rahaman",
        "Prof. Dr. Md. Ezharul Islam",
        "Bulbul Ahammad",
        "Anup Majumder"
    ]
    const executivePostList = [
        "Convener",
        "Coordinator",
        "Member",
        "Member",
        "Member",
        "Member",
        "Member",
        "Member",
        "Member"
    ]
    
    return (
        <Container fluid="true" className="mb-5">
            <Container fluid="true" className="committeeBody text-center">
                <Container fluid="true" className="committeeTitleBorder">
            <h4 className="title mt text-center text-white">Executive Committee</h4>
            </Container>
            <Row className="mt-5 p-0 mx-0">
                {imageUrls.map((img, idx) => (
                    <Col className="mt-3" lg={3} md={4} sm={6}>
                        <ChoyonSirCard choyon={img} name={executiveNameList[idx]} post={executivePostList[idx]}/>
                    </Col>
                ))}
            </Row>
            </Container>
        </Container>
    );
}

export default Committee;
