import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

function GalleryTop(props) {
    return (
        <Container fluid="true" className="galleryTop mb-4">
            <Row className="mx-0 px-0 overLayGalleryTop">
                <Col className="mx-0 px-0">
                    <div className="text-center overlayContentGalleryTop">
                        <h4 className="title text-light">Gallery Section</h4>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
export default GalleryTop;
