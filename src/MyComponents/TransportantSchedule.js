import React, {Fragment} from 'react';
import {Container,Row} from 'react-bootstrap';
import TopMenu from "../Components/TopMenu";
import CustomButton from '../MyComponents/CustomButton';
import InfoDiv from '../MyComponents/InfoDiv';

import schedule from "../Assets/Images/schedule.png";
import roadMap from "../Assets/Images/parking.jpg";

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
                
                <Row className="mx-0">
                    <img src={schedule} className="w-100 h-auto" alt=""/>
                    <div className="text-center">
                        <img src={roadMap} className="roadMap" alt=""/>
                    </div>
                </Row>
            </Container>
        </Fragment>
     );
}

export default TransportantionSchedule;