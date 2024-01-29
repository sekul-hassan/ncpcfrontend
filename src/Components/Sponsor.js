import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import spns from "../Assets/Images/sponsor.png";
import GlobalCard from "./GlobalCard";

function Sponsor({ imageUrls, executiveNameList, executivePostList, committeeName }) {
    return (
/*  <Container fluid="true" className="text-center p-2">
             <Row className="m-0">
                 <Col lg={6} md={6} sm={12} className="px-1">
                     <h4 className="titleSponsor mt-3">Gold Sponsors</h4>
                     <img className="supportImg mt-3" src={spns} alt=""/>
                 </Col>
                 <Col lg={6} md={6} sm={12} className="px-1">
                     <h4 className="titleSponsor mt-3">Other Sponsors</h4>
                     <img className="supportImg mt-3" src={spns} alt=""/>
                 </Col>
             </Row>
         </Container> */
        <Container fluid="true" className="mt-3 p-3">
{/*  <div className="committeeTextDiv">
                <h4 className="title text-white">{committeeName}</h4>
            </div> */}
            <Row className="mt-2 p-0 mx-0">
                {imageUrls.map((img, idx) => (
                    <Col className="mt-3" lg={3} md={4} sm={6}>
                        <GlobalCard image={img} name={executiveNameList[idx]} post={executivePostList[idx]} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Sponsor;