import React, {Fragment} from 'react';
import {Container,Row} from 'react-bootstrap';
import TopMenu from "../Components/TopMenu";
import CustomButton from '../MyComponents/CustomButton';
import InfoDiv from '../MyComponents/InfoDiv';

function TeamStatus(props) {
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

    return (
        <Fragment>
            <TopMenu/>
            <Container fluid="true" className="p-3">
                <Row className="text-center mx-0" style={{paddingBottom: '20px'}}>
                    <CustomButton buttonText="NCPC 2023 TEAM STATUS" linksTo="#"/>
                </Row>
                <InfoDiv className="title" info="Team status such as payment will be shown here."/>
                {/* <Row className="text-center mx-0">
                     <CustomButton buttonText="Registration Starts Soon!" linksTo="#"/>
                </Row> */}
            </Container>
        </Fragment>
     );
}

export default TeamStatus;