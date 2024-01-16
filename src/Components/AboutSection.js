import React from 'react';
import {Col, Container, Row,Carousel} from "react-bootstrap";
import _201 from "../Assets/Images/dept/lab_201.png";
import green from "../Assets/Images/dept/green.png";
import codeElevate_302 from "../Assets/Images/dept/codeElevate_302.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell} from "@fortawesome/free-solid-svg-icons";
// import SeeMoreNoticeCard from './SeeMoreNoticeCard';
function AboutSection(props) {
    return (
        <Container fluid="true" className="text-center honorContainer">
            <Row className="p-0 m-0">
                
                <Col className="noticeDivLeft mt-2 p-0" md={7} lg={9} sm={12}>
                {/* <h3 className="noticeTitle text-center text-white pt-3 pb-3">About JU CSE</h3> */}
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
                    <Container fluid="true" className="noticeDivRight pb-2">
                        <Container fluid="true" className="noticeDivRightHeading mt-2">
                            <h3 className="noticeTitle p-3"> <FontAwesomeIcon icon={faBell} beatFade size="l" /><span>     </span>Notice</h3>
                        </Container>
                        <a href="facebook.com/abc">1. Registration Rules</a>
                        <hr/>
                        <a href="facebook.com/abc">2. Accommodation</a>
                        <hr/>
                        <a href="facebook.com/abc">3. Payment Details</a>
                        <hr/>
                        <a href="facebook.com/abc">4. Main Contest Date</a>
                        <hr/>
                        <a href="facebook.com/abc" className="seeMoreLink">See More...</a>
                        <hr/>
                        {/* <SeeMoreNoticeCard/>                        */}
                    </Container>
                    <Container fluid="true" className="carouselItemContainerSpeech">
                        {/* <h5 className="noticeTitleSpeech p-3">SPEECH</h5> */}
                        <Carousel className='carouselVideo'>
                            <Carousel.Item>
                            <iframe width="320" height="315" src="https://www.youtube.com/embed/GkZhGCJsIj8?si=vWXuy3cz1JyM8fXQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <h6 className="whiteTitle text-black">Explore the beauty of JU</h6>
                            </Carousel.Item>
                        </Carousel>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutSection;
