import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import logo_NCPC  from "../Assets/Images/ncpc_logo_transparent.png"
function AboutNcpc() {
    const headerStyles = {
        background: 'linear-gradient(45deg, #FF4081 30%, #FF9800 90%)',
    };

    const containerStyles = {
        background: "#fff",
    };

    const rowStyles = {
        background: "#fff"
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
       <Container fluid="true" className="text-center aboutNcpc p-4" style={containerStyles}>
           <Row className="mx-0 aboutNcpcRow" style={rowStyles}>
               <h4 className="title pt-4 pb-5 text-white" style={headerStyles}>ABOUT NCPC 2023</h4>
               <Col md={12} lg={5} sm={12}>
                   <img src={logo_NCPC} className="aboutNcpcLogo" alt="aboutNcpc"/>
               </Col>
               <Col md={12} lg={7} sm={12}>
                   <h4 className="m-5" style={headerFontStyle}>National Collegiate Programming Contest NCPC 2023</h4>
                   <p style={paraFontStyle}>
                   National Collegiate Programming Contest NCPC is a prestigious programming contest organized at national level for enhancing programming capacity and problem solving skills among the university students in Bangladesh. It was patronized by Bangladesh Computer Council(BCC) in 1998.Since its inception, this competition has effectively ignited a passion for programming among the country's aspiring coders. This year, the Department of Computer Science and Engineering, Jahangirnagar University, is set to host the event NCPC 2023. With participants from over 100 universities across Bangladesh, this event is expected to be an exciting and highly competitive coding challenge.
                  </p>
               </Col>
           </Row>
       </Container>
    );
}

export default AboutNcpc;