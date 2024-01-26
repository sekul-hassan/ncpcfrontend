import React, {Fragment} from 'react';
import {Container,Row} from 'react-bootstrap';
import TopMenu from "../Components/TopMenu";
import CustomButton from '../MyComponents/CustomButton';
import InfoDiv from '../MyComponents/InfoDiv';

function TransportantionSchedule(props) {
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
                    <CustomButton buttonText="NCPC 2023 TRANSPORTATION SCHEDULE" linksTo="#"/>
                </Row>
                
        
                <InfoDiv className="title" info="Transporation schedule for NCPC 2023 will be available here."/>
                {/* <Row className="text-center mx-0">
                     <CustomButton buttonText="Registration Starts Soon!" linksTo="#"/>
                </Row> */}
            </Container>
        </Fragment>
     );
}

export default TransportantionSchedule;