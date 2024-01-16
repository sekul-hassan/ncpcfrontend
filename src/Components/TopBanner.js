import React, {Fragment} from 'react';
import {Button, Carousel, Col, Container, Row} from "react-bootstrap";
import s_minar from "../Assets/Images/dept/shaheed_minar.png";
import mh from "../Assets/Images/dept/mh.png";
import Count from "../Components/Count";
import {Link} from "react-router-dom";


function TopBanner() {
    
    return (
        <Fragment>
            <Container fluid="true" className="topBanner">
                <Row className="p-0 m-0">
                    
                    <Col md={7} lg={7} sm={12} className="m-0 p-0">
                        <Carousel className="card-carousel">
                            <Carousel.Item>
                                <img className="carouselImg" src={mh} alt=""/>
                                <Carousel.Caption>
                                    <Link to="registration"><Button className="contactBtn">Register Now</Button></Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="carouselImg" src={s_minar} alt=""/>
                                <Carousel.Caption>
                                    <Link to="registration"><Button className="contactBtn">Register Now </Button></Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col md={5} lg={5} sm={12}>
                        <Count/>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default TopBanner;