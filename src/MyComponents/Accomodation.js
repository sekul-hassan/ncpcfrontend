import React, {Fragment} from 'react';
import {Container,Row} from 'react-bootstrap';
import TopMenu from "../Components/TopMenu";
import CustomButton from '../MyComponents/CustomButton';
import InfoDiv from '../MyComponents/InfoDiv';

function Accomodation(props) {
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
                    <CustomButton buttonText="NCPC 2023 ACCOMODATION DETAILS" linksTo="#"/>
                </Row>
                <InfoDiv className="title" info="Accomodation details for NCPC 2023 will be available here."/>
            </Container>
        </Fragment>
     );
}

export default Accomodation;