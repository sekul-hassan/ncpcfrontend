import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faPhoneVolume} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";


function Footer(props) {
    const containerStyle = {
        background: 'linear-gradient(45deg, #1a237e 30%, #283593 90%)'
    }

    return (

        <Container fluid="true" style={containerStyle}>
            <Row className="m-0 pt-3">
                <Col className="contact" md={6} sm={12} lg={6}>
                    <h4>Important Links</h4>
                    <Link to="/registration">Registration</Link><br/>
                    <a href="https://juniv.edu/department/cse" target="_blank" rel="noreferrer">JU CSE</a><br/>
                </Col>
                <Col className="contact" md={6} sm={12} lg={6}>
                    <h4>Contact Us</h4>
                    <a href="https://www.juniv.edu/department/cse" target="_blank" rel="noreferrer">Department of Computer Science & Engineering<br/>
                    Jahangirnagar University, Savar, Dhaka-1342</a><br/>
                    <span><FontAwesomeIcon icon={faPhoneVolume}/> 01925228874, 01941336337 </span>
                    <span className="mx-3"><FontAwesomeIcon icon={faEnvelope}/> pc.cse@juniv.edu</span>
                    <div className="iconDiv">
                        <a className="contactLink mx-1" href="https://www.facebook.com/groups/1406720813273322" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook}/> </a>
                    </div>
                </Col>
            </Row>
            <Row className="m-0 p-0">
                <Col className="footerCredit text-center">
                    &copy; 2024 <a href="https://www.juniv.edu/department/cse" target="blank" rel="noreferrer">Department of Computer Science and Engineering, Jahangirnagar University</a>
                </Col>
            </Row>
        </Container>



    );
}

export default Footer;