
import React  from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendarDays} from "@fortawesome/free-solid-svg-icons";
import {faBuildingColumns,faUser,faPeopleGroup} from "@fortawesome/free-solid-svg-icons";
import CountdownTimer from '../../OthersComponents/CountdownTimer';

const Dates = () => {
  return (
    
    
    <Container fluid="true" className="p-0"> 
       <Row className="DatesRow">  
        <h4 className='text-center pt-0 mb-1 importantDates'>Important Dates</h4> 
           <Col className="DatesCol m-0 p-0" lg={4} md={4} sm={12}>
            <Container fluid="true" className="Dates_Counts p-0">
                <h1 className='text-center text-white p-4'><FontAwesomeIcon icon={faCalendarDays} size="l" /></h1>
                {/* <h1 className='text-center p-2'><FontAwesomeIcon icon={faCalendarDays} size="l"/></h1> */}
                {/* <DatesCard/>      */}
                <p className="titleDates text-center">15 February 2024</p>
                <h5 className="subTitleDates text-center pt-1">Registration Deadline</h5>
            </Container>
            </Col>
            <Col className="DatesCol m-0 p-0" lg={4} md={4} sm={12}>
            <Container fluid="true" className="Dates_Counts p-0">
            <h1 className='text-center text-white p-4'><FontAwesomeIcon icon={faCalendarDays} size="l" /></h1>
            <p className="titleDates text-center">26 February 2024</p>
                <h5 className="subTitleDates text-center pt-1">Main Contest</h5>    
            </Container>
            </Col>
                 <Col className="DatesCol m-0 p-0" lg={4} md={4} sm={12}>
            <Container fluid="true" className="Dates_Counts p-0">
            <h1 className='text-center text-white p-4'><FontAwesomeIcon icon={faCalendarDays} size="l" /></h1>
            <p className="titleDates text-center">20 February 2024</p>
                <h5 className="subTitleDates text-center pt-1">Payment Deadline</h5>    
            </Container>
            </Col>
            
        </Row>

        <Row className="DatesRow">  
        <h4 className='text-center importantDates mt-5'>NCPC 2023 in numbers</h4> 
           <Col className="DatesCol m-0 p-0" lg={4} md={4} sm={12}>
        
           <Container fluid="true" className='mid'>
                <h1 className='text-center'><FontAwesomeIcon icon={faBuildingColumns}/></h1> <h3 className='text-center'>Universities</h3>
                <CountdownTimer initialValue={0} targetValue={100} speed={100} />

                </Container>
            </Col>
            <Col className="DatesCol m-0 p-0" lg={4} md={4} sm={12}>
            <Container fluid="true" className='mid'>
              <h1 className='text-center'><FontAwesomeIcon icon={faPeopleGroup}/></h1><h3 className='text-center'>Teams</h3>
              <CountdownTimer initialValue={0} targetValue={120} speed={100} />
            </Container>
            </Col>

            <Col className="DatesCol m-0 p-0" lg={4} md={4} sm={12}>
            <Container fluid="true" className='mid'>
               <h1 className='text-center'><FontAwesomeIcon icon={faUser}/></h1><h3 className='text-center'>Contestants</h3>
                <CountdownTimer initialValue={0} targetValue={300} speed={70} />
             </Container>
            </Col>
            </Row>
        
       </Container>
      
  
  );
};

export default Dates;
