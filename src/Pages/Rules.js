import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import "../Assets/CSS/About.css";
import logo_NCPC from "../Assets/Images/Contents/logo_NCPC.jpeg";

function Rules(props) {
    return (
        <Container fluid >
        <Row className="text-center">
           <h4 className="subtitleRules text-dark mt-1 mb-4">
              National Collegiate Programming Contest NCPC 2023 Rules
            </h4>
          
          <Col md={12} lg={12} sm={12} className="ncpcImgDiv p-0">
            <img src={logo_NCPC} alt="aboutNcpc" className="rulesImg" />
            </Col>
            <h5 className='mt-2 mb-5'>Hosted By- Dept of CSE, JU</h5>
        </Row>
            
            <Row>
            <Col md={12} lg={12} sm={12}>
            <p className="RulesDescription">
             <h4>Team Requirements</h4>Teams qualify to advance to the World Finals through Regional Contests. See the ICPC Regional Rules and Region-Specific Rules for details on advancing to the World Finals.  Only one team from a given institution may advance to the World Finals. No team member on the qualifying team may have competed as a contestant in two previous World Finals.<br/><br/>
             The coach of a qualifying team is the point of contact before and during World Finals activities. A contestant of a team may not serve as the coach.  The coach must complete certification at the Team Certification Web Site within five (5) business days of notification.  Qualifying teams will be invited by email and postal mail (if requested) soon after completing certification.<br/><br/>
             

             <h4>Support and Prizes</h4>The ICPC Host will provide each finalist team with hotel accommodations for the coach and three contestants according to dates published on ICPC Host Invitations. The coach should identify any special needs during registration.  The ICPC Host will seek to accommodate those needs at a team expense not to exceed the cost of one additional sleeping room.  The teams and coaches will be treated to a full schedule of activities including a full course of complimentary food functions.<br/><br/>
             Teams finishing in the top four positions will be awarded Gold Medals.  Those teams finishing fifth through eighth place will be awarded Silver Medals.  Those teams finishing ninth through the twelfth place will receive Bronze Medals. Additional Bronze Medals may be awarded to teams solving the same number of problems as the twelfth place team and in a total elapsed time no more than 60 minutes more than the twelfth place team.  Such teams will be awarded the twelfth place.<br/><br/>
            </p>
          </Col>
        </Row>
      </Container>
    );
}

export default Rules;