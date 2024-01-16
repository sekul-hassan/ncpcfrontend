import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faPhoneVolume} from "@fortawesome/free-solid-svg-icons";


function Footer(props) {
    return (

        <Container fluid="true" className="footer">
            <Row className="m-0 pt-3">
                <Col className="contact" md={6} sm={12} lg={6}>
                    <h4>Important Links</h4>
                    <a href="facebook.com/abc">Notice</a><br/>
                    <a href="facebook.com/abc">Registration</a><br/>
                    <a href="facebook.com/abc">JU CSE</a><br/>

                </Col>
                <Col className="contact" md={6} sm={12} lg={6}>
                    <h4>Contact Us</h4>
                    <a href="https://www.juniv.edu/department/cse" target="blank">Department of Computer Science & Engineering<br/>
                    Jahangirnagar University, Savar, Dhaka-1342</a><br/>
                    <span><FontAwesomeIcon icon={faPhoneVolume}/> 01941336337 , 01816100063</span>
                    <span className="mx-3"><FontAwesomeIcon icon={faEnvelope}/> pc.cse@juniv.edu</span>
                    <div className="iconDiv">
                        <a className="contactLink mx-1" href="https://www.facebook.com/groups/1406720813273322"><FontAwesomeIcon icon={faFacebook}/> </a>
                        <a className="contactLink mx-1" href="facebook.com/abc"><FontAwesomeIcon icon={faTwitter}/> </a>
                        <a className="contactLink mx-1" href="facebook.com/abc"><FontAwesomeIcon icon={faInstagram}/> </a>
                        <a className="contactLink mx-1" href="facebook.com/abc"><FontAwesomeIcon icon={faLinkedin}/> </a>
                    </div>
                </Col>
            </Row>
            <Row className="m-0 p-0">
                <Col className="footerCredit text-center">
                    &copy; 2024 <a href="https://www.juniv.edu/department/cse" target="blank">Department of Computer Science and Engineering, Jahangirnagar University</a>
                </Col>
            </Row>
        </Container>



    );
}

export default Footer;