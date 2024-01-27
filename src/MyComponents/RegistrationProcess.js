import React, {Fragment} from 'react';
import {Container,Row} from 'react-bootstrap';
import TopMenu from "../Components/TopMenu";
import CustomButton from '../MyComponents/CustomButton';
import InfoDiv from '../MyComponents/InfoDiv';

function RegistrationProcess(props) {
    const containerStyle = {
        width: '80%',
        margin: '0 auto', 
        fontSize: "18px",
        
    };

    const ulStyle = {
        textAlign: 'justify',
        fontSize: '18px',
        marginBottom: '20px',
      };

      const mobileStyle = {
        width: '100%',
        margin: '0',
        padding:'0'
    };

    return (
        <Fragment>
            <TopMenu/>
            <Container fluid="true" className="p-3">
                <Row className="text-center mx-0" style={{paddingBottom: '20px'}}>
                    <CustomButton buttonText="NCPC 2023 REGISTRATION PROCESS"/>
                </Row>
                
                <div className="title" style={{ ...containerStyle, ...(window.innerWidth <= 575 && mobileStyle) }}>
                    <ul>
                        <CustomButton buttonText="Registration" style={window.innerWidth <= 575 ? mobileStyle : {}}/>
                        <ul  style={{ ...ulStyle, ...(window.innerWidth <= 575 && mobileStyle) }}>
                            <li>The registration procedure requires filling out the team and institute name, followed by information for the team members and their coach. </li>
                            <li>It is essential that the coach and all team members complete their registration in the NCPC Registration System before participating in the contest.</li>
                            <li>All team members must be enrolled in the same institution.  A contact at the team institution, typically a faculty member, must be designated and registered as the “team coach”. The team coach must certify the eligibility of contestants and be the official point-of-contact with the team before and during contest activities.  A team may only have one registered coach, and that coach cannot also be a contestant.</li>
                        </ul>
                        <CustomButton buttonText="Payment"/>
                        <ul style={{ ...ulStyle, ...(window.innerWidth <= 575 && mobileStyle) }}>
                            <li>A bKash marchant account will be provided for payment.</li>
                            <li>Registration will not be verified unless a team completes payment and provides payment  information, including the bKash Transaction ID.</li>
                            <li>Payment fee for preliminary registration is <b>BDT 300</b>.</li>
                        </ul>
                    </ul>
                </div>
                <InfoDiv className="title" info="Preliminary Registration Starts Soon!"/>
                {/* <Row className="text-center mx-0">
                     <CustomButton buttonText="Registration Starts Soon!" linksTo="#"/>
                </Row> */}
            </Container>
        </Fragment>
     );
}

export default RegistrationProcess;