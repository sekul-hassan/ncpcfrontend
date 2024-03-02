import React, { Fragment } from 'react';
import { Carousel, Col, Container, Row } from "react-bootstrap";
import tLogo from "../Assets/Images/banner2.jpg";
import sched from "../Assets/Images/sched.jpg";
import mh from "../Assets/Images/dept/mh.png";
import poster from "../Assets/Images/onsite_bg.png";
import Count from "../Components/Count";



function TopBanner() {

    return (
        <Fragment>
            <Container fluid="true" className="topBanner">
                <Row className="p-0 m-0">
                    <Col md={7} lg={7} sm={12} className="m-0 p-0">
                        <Carousel>
                            <Carousel.Item>
                                <img className="carouselImg" src={sched} alt="" />
                                <Carousel.Caption>
                                    {/* <RegistrationButton buttonText="Register Now" linksTo="/registration"/> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="carouselImgPoster" src={poster} alt="" />
                                <Carousel.Caption>
                                    {/* <RegistrationButton buttonText="Register Now" linksTo="/registration"/> */}
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img className="carouselImg" src={mh} alt="" />
                                <Carousel.Caption>
                                    {/* <RegistrationButton buttonText="Register Now" linksTo="/registration"/> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="carouselImg" src={tLogo} alt="" />
                                <Carousel.Caption>
                                    {/* <RegistrationButton buttonText="Register Now" linksTo="/registration"/> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col md={5} lg={5} sm={12}>
                        <Count />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default TopBanner;