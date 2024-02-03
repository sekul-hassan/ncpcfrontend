import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import GlobalCard from "../Components/GlobalCard";
import InfoDiv from "../MyComponents/InfoDiv";

function ExecutiveCommitteeGrid({ imageUrls, executiveNameList, executivePostList, committeeName }) {

    return (
        <Container fluid="true" className="mt-3 p-3">
            
             <div className='mt-3'>
                <InfoDiv info="Executive Committee" gradient='linear-gradient(45deg, #1a237e 30%, #283593 90%)'/>
            </div>
            {/* VC */}
            <Row className="justify-content-center">
                <Col className="mt-3" lg={3} md={4} sm={6}>
                    <GlobalCard image={imageUrls[0]} name={executiveNameList[0]} post={executivePostList[0]} />
                </Col>
            </Row>
            {/* PRO VC */}
            <Row className="justify-content-center">
                <Col className="mt-3" lg={3} md={4} sm={6}>
                    <GlobalCard image={imageUrls[1]} name={executiveNameList[1]} post={executivePostList[1]} />
                </Col>
                <Col className="mt-3" lg={3} md={4} sm={6}>
                    <GlobalCard image={imageUrls[2]} name={executiveNameList[2]} post={executivePostList[2]} />
                </Col>
            </Row>

             {/* TREASURER */}   
            <Row className="justify-content-center">    
                <Col className="mt-3" lg={3} md={4} sm={6}>
                    <GlobalCard image={imageUrls[3]} name={executiveNameList[3]} post={executivePostList[3]} />
                </Col>
            </Row>

            {/* DEANS */}
            {/* <div className='mt-3'>
                <InfoDiv info="Faculty Deans" gradient='linear-gradient(45deg, #1a237e 30%, #283593 90%)'/>
            </div> */}
            <Row className="justify-content-center">
                <Col className="mt-3" lg={3} md={4} sm={6}>
                    <GlobalCard image={imageUrls[7]} name={executiveNameList[7]} post={executivePostList[7]} />
                </Col>
                <Col className="mt-3" lg={3} md={4} sm={6}>
                    <GlobalCard image={imageUrls[8]} name={executiveNameList[8]} post={executivePostList[8]} />
                </Col>
                <Col className="mt-3" lg={3} md={4} sm={6}>
                    <GlobalCard image={imageUrls[9]} name={executiveNameList[9]} post={executivePostList[9]} />
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col className="mt-3" lg={3} md={4} sm={6}>
                    <GlobalCard image={imageUrls[10]} name={executiveNameList[10]} post={executivePostList[10]} />
                </Col>
                <Col className="mt-3" lg={3} md={4} sm={6}>
                    <GlobalCard image={imageUrls[11]} name={executiveNameList[11]} post={executivePostList[11]} />
                </Col>
                <Col className="mt-3" lg={3} md={4} sm={6}>
                    <GlobalCard image={imageUrls[12]} name={executiveNameList[12]} post={executivePostList[12]} />
                </Col>
            </Row>

            {/* DIRECTOR ICT, TSC, TRANSPORT */}  
            <Row className="justify-content-center">
                <Col className="mt-3" lg={3} md={4} sm={6}>
                    <GlobalCard image={imageUrls[4]} name={executiveNameList[4]} post={executivePostList[4]} />
                </Col>
                <Col className="mt-3" lg={3} md={4} sm={6}>
                    <GlobalCard image={imageUrls[5]} name={executiveNameList[5]} post={executivePostList[5]} />
                </Col>
                <Col className="mt-3" lg={3} md={4} sm={6}>
                    <GlobalCard image={imageUrls[21]} name={executiveNameList[21]} post={executivePostList[21]} />
                </Col>
            </Row>
            
            {/* PROCTOR */}
            <Row className="justify-content-center">
                <Col className="mt-3" lg={3} md={4} sm={6}>
                    <GlobalCard image={imageUrls[6]} name={executiveNameList[6]} post={executivePostList[6]} />
                </Col>
            </Row>

            {/* ADVISORS */}
            {/* <div className='mt-3'>
                <InfoDiv info="Advisors" gradient='linear-gradient(45deg, #1a237e 30%, #283593 90%)'/>
            </div> */}
            <Row className="justify-content-center">
                {/* <Col className="mt-3" lg={3} md={4} sm={6}>
                    <GlobalCard image={imageUrls[16]} name={executiveNameList[16]} post={executivePostList[16]} />
                </Col> */}
                <Col className="mt-3" lg={3} md={4} sm={6}>
                    <GlobalCard image={imageUrls[17]} name={executiveNameList[17]} post={executivePostList[17]} />
                </Col>
                <Col className="mt-3" lg={3} md={4} sm={6}>
                    <GlobalCard image={imageUrls[18]} name={executiveNameList[18]} post={executivePostList[18]} />
                </Col>
            </Row>
            
            {/* MEMBERS */}
            {/* <div className='mt-3'>
                <InfoDiv info="Executive Members" gradient='linear-gradient(45deg, #1a237e 30%, #283593 90%)'/>
            </div> */}
            <Row className="justify-content-center">
                <Col className="mt-3" lg={3} md={4} sm={6}>
                    <GlobalCard image={imageUrls[13]} name={executiveNameList[13]} post={executivePostList[13]} />
                </Col>
                <Col className="mt-3" lg={3} md={4} sm={6}>
                    <GlobalCard image={imageUrls[14]} name={executiveNameList[14]} post={executivePostList[14]} />
                </Col>
                <Col className="mt-3" lg={3} md={4} sm={6}>
                    <GlobalCard image={imageUrls[15]} name={executiveNameList[15]} post={executivePostList[15]} />
                </Col>
            </Row>


            {/* CONVENOR, ORGANIZING SECRETARY */}
            {/* <div className='mt-3'>
                <InfoDiv info="Convenor" gradient='linear-gradient(45deg, #1a237e 30%, #283593 90%)'/>
            </div> */}
            <Row className="justify-content-center">
                <Col className="mt-3" lg={3} md={4} sm={6}>
                    <GlobalCard image={imageUrls[19]} name={executiveNameList[19]} post={executivePostList[19]} />
                </Col>
                <Col className="mt-3" lg={3} md={4} sm={6}>
                    <GlobalCard image={imageUrls[20]} name={executiveNameList[20]} post={executivePostList[20]} />
                </Col>
            </Row>
        </Container>
    );
}

export default ExecutiveCommitteeGrid;
