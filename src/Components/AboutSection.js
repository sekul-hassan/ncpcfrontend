import React from 'react';
import {Col, Container, Row,Carousel} from "react-bootstrap";
import _201 from "../Assets/Images/dept/lab_201.png";
import green from "../Assets/Images/dept/green.png";
import codeElevate_302 from "../Assets/Images/dept/codeElevate_302.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import ReactPlayer from "react-player/youtube";


function AboutSection(props) {
    return (
        <Container fluid="true" className="text-center p-3">
            <Row className="p-0 m-0">
                <Col className="noticeDivLeft mt-2 p-0" md={7} lg={9} sm={12}>
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
                    <p className="alumniDescription">
                    <h3 className="jucseDescriptionTitle text-center mt-2">About JU CSE</h3>
                        <hr/>
                        The Department of Computer Science and Engineering, Jahangirnagar University, has been striving to cultivate visionary programmers who can lead the next tech wave. With a vision to empower students with programming skills, the department offers special facilities, including a dedicated lab just for competitive programmers.Apart from this, the department places a significant emphasis on research. Teachers actively support and encourage students to engage in programming and research pursuits, providing guidance and mentorship along the way.
                    </p>
                </Col>
                <Col md={5} lg={3} sm={12} className="m-0 p-0" >
                    <div className="noticeDivRight pb-2">
                        <h3 className="noticeTitle p-3"><FontAwesomeIcon icon={faBell} beatFade size="l"/><span>     </span>Notice</h3>
                        <Link to="/rules">1. Registration Rules</Link>
                        <hr/>
                        <Link to="/rules">2. Accommodation</Link>
                        <hr/>
                        <Link to="/rules">3. Payment Details</Link>
                        <hr/>
                        <Link to="/rules">4. Main Contest Date</Link>
                        <hr/>
                    </div>
                    <Carousel className='carouselVideo'>
                        <Carousel.Item>
                            <ReactPlayer
                                url="https://www.youtube.com/embed/GkZhGCJsIj8?si=vWXuy3cz1JyM8fXQ"
                                width="100%"
                                height="100%"
                            />
                            <h6 className="whiteTitle text-black">Explore the beauty of JU</h6>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutSection;
