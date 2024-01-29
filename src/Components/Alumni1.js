import React, {Fragment} from 'react';
import {Carousel, Col, Container, Row} from "react-bootstrap";
import img1 from "../Assets/Images/alumni_photos/first.png";
import _2015 from "../Assets/Images/alumni_photos/2015.jpg";
import _2016 from "../Assets/Images/alumni_photos/2016.jpg";
import _2017 from "../Assets/Images/alumni_photos/2017.jpg";
import _2021 from "../Assets/Images/alumni_photos/2021.jpg";

function Alumni1(props) {
    const containerStyles = {
        background: "#fff",
    };

    const rowStyles = {
        background: 'linear-gradient(45deg, #8BC34A 30%, #CDDC39 90%)',
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
            <Container fluid="true" className='text-center p-4' style={containerStyles}>
                <Row className="mx-0 aboutNcpcRow" style={rowStyles}>
                    <Col md={12} lg={6} sm={12} className="m-0 px-4 pt-5 alumniColumn">
                        <h3 style={headerFontStyle}>ALUMNI STORIES</h3>
                        <p className="p-4" style={paraFontStyle}>The Department of Computer Science and Engineering,Jahangirnagar University,has seen many brilliant contestants who excelled in programming contests, both nationally and internationally.These individuals have not just secured good positions but have also firmly stamped the department's and the university's name in the hall of fame within the tech world.</p>
                    </Col>
                    <Col md={12} lg={6} sm={12} className="noticeDivLeft mt-0 p-0">
                        <Carousel interval={6000} controls={false} >
                            <Carousel.Item className="carouselImgAlumni m-0 p-0">
                                <img src={_2015} alt=""/>
                                <div className="carouselCaptionAlumni">
                                    <h3 className="whiteTitle">JU_Assassins</h3>
                                    <p className="alumniDescriptionInside text-white text-center">Aninda Majumder(CSE), Md. Nafis Sadique(IIT), Suman Bhadra(CSE) participated at the ACM-ICPC 2015 World Finals and solved 6 problems.</p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carouselImgAlumni">
                                <img src={_2016} alt=""/>
                                <div className="carouselCaptionAlumni" >
                                    <h3 className="whiteTitle">JU_O(N^3) </h3>
                                    <p className="alumniDescriptionInside text-white text-center">Md. Nafis Sadique(IIT), Niloy Datta(IIT), Raihat Zaman Neloy(CSE) secured 50th place at the ACM-ICPC 2016 World Finals solving 6 problems. </p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carouselImgAlumni">
                                <img src={_2017} alt=""/>
                                <div className="carouselCaptionAlumni">
                                    <h3 className="whiteTitle">JU_Circavex </h3>
                                    <p className="alumniDescriptionInside text-white text-center">Raihat Zaman Neloy(CSE), Bir Bahadur Khatri(CSE), Md Sahedul Islam Sohel(IIT) at the ACM-ICPC 2017 World Finals. </p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carouselImgAlumni">
                                <img src={_2021} alt=""/>
                                <div className="carouselCaptionAlumni">
                                    <h3 className="whiteTitle">JU_Glass_Half_Full</h3>
                                    <p className="alumniDescriptionInside text-white text-center">Anik Sarker(IIT 45), Sakib Hasan(CSE-44), Chayan Kumar Roy(CSE-45) representing Jahangirnagar University at the ICPC 2021 World Finals Dhaka.</p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carouselImgAlumni">
                                <img src={img1} alt=""/>
                                <div className="carouselCaptionAlumni">
                                    <h3 className="whiteTitle">JU_kzvd4729</h3>
                                    <p className="alumniDescriptionInside text-white text-center"> Mahmudul Hasan Shanto(CSE-46), Richita Khandakar Rifat(CSE-46) and Alif Al Hasan(CSE-47) secured 3rd place at the 2021 ICPC Asia Regional Dhaka Contest.</p>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Alumni1;

