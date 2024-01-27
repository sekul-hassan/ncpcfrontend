import React, {Fragment} from 'react';
import {Carousel, Col, Container, Row} from "react-bootstrap";
import _2015 from "../Assets/Images/alumni_photos/2015.jpg";
import _2016 from "../Assets/Images/alumni_photos/2016.jpg";
import _2017 from "../Assets/Images/alumni_photos/2017.jpg";
import _2021 from "../Assets/Images/alumni_photos/2021.jpg";
import _201 from "../Assets/Images/dept/lab_201.png";
import green from "../Assets/Images/dept/green.png";
import codeElevate_302 from "../Assets/Images/dept/codeElevate_302.jpg";

function AboutCSEJU(props) {
    const containerStyles = {
        background: "#fff",
    };

    const rowStyles = {
        background: 'linear-gradient(45deg, #FFD54F 30%, #FFB300 90%)',
    }

    const headerFontStyle = {
        fontFamily: "Montserrat",
        fontSize: "20px",
    }

    const paraFontStyle = {
        fontFamily: "Montserrat",
        fontSize: "16px",
        textAlign: "justify",
    }

    return (
        <Fragment>
            <Container fluid="true" className='text-center p-3' style={containerStyles}>
                <Row className="mx-0 aboutNcpcRow" style={rowStyles}>
                    <Col md={12} lg={6} sm={12} className="m-0 px-4 pt-5 alumniColumn">
                    <h3 className="text-center mt-2 mb-5" style={headerFontStyle}>Department of Computer Science and Engineering</h3>
                    <p style={paraFontStyle}>The Department of Computer Science and Engineering, Jahangirnagar University, has been striving to cultivate visionary programmers who can lead the next tech wave. With a vision to empower students with programming skills, the department offers special facilities, including a dedicated lab just for competitive programmers.Apart from this, the department places a significant emphasis on research. Teachers actively support and encourage students to engage in programming and research pursuits, providing guidance and mentorship along the way.
                    </p>
                    </Col>
                    <Col md={12} lg={6} sm={12} className="noticeDivLeft mt-0 p-0">
                    <Carousel className="card-carousel" interval={6000}>
                        <Carousel.Item>
                            <img className="carouselImg" src={green} alt=""/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carouselImg" src={codeElevate_302} alt=""/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carouselImg" src={_201} alt=""/>
                        </Carousel.Item>
                    </Carousel>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default AboutCSEJU;

