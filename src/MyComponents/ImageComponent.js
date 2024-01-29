import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import GlobalCard from "../Components/GlobalCard";

function ImageComponent(image, name, post) {
    return (
        <Col className="mt-3" lg={3} md={4} sm={6}>
            <GlobalCard image={image} name={name} post={post} />
        </Col>
    )
}

export default ImageComponent;