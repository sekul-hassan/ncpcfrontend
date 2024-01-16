
import React  from 'react';
// import CountdownTimer from '../OthersComponents/CountdownTimer';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faPeopleGroup} from "@fortawesome/free-solid-svg-icons";
// import {faBuildingColumns} from "@fortawesome/free-solid-svg-icons";
// import {faUser} from "@fortawesome/free-solid-svg-icons";
import {Container} from 'react-bootstrap';
import Dates from '../Components/DatesFolder/Dates';
// import choyon from "../Assets/Images/dept/rsz_1logo_ncpc.jpg";
const CountApp = () => {
  return (
    
    
    <Container fluid="true" className="App m-0 mt-5 p-0">    
       {/* <h4 className='text-center pt-5'>Important Dates</h4> */}
        {/* <img className="countImg" src={choyon} alt="af" /> */}
        {/* <Row className="countRow  p-0 m-0">  
           <Col className="countCol m-0 p-0" lg={4} md={4} sm={12}>
            <Container fluid="true" className="ncpc_Counts">
           
               <Container fluid="true" className='mid'>
                <h1 className='text-center'><FontAwesomeIcon icon={faBuildingColumns}/></h1><h3 className='text-center text-white'>Universities</h3>
                <CountdownTimer initialValue={0} targetValue={100} speed={500} />
                </Container>
            </Container>
            </Col>
            <Col className="countCol m-0 p-0" lg={4} md={4} sm={12}>
             <Container fluid="true" className="ncpc_Counts">
             <Container fluid="true" className='mid'>
              <h1 className='text-center'><FontAwesomeIcon icon={faPeopleGroup}/></h1><h3 className='text-center text-white'>Teams</h3>
              <CountdownTimer initialValue={0} targetValue={120} speed={500} />
            </Container>
            </Container>
           </Col>
         
           <Col className="countCol m-0 p-0" lg={4} md={4} sm={12}>
             <Container fluid="true" className="ncpc_Counts">
             <Container fluid="true" className='mid'>
               <h1 className='text-center'><FontAwesomeIcon icon={faUser}/></h1><h3 className='text-center text-white'>Contestants</h3>
                <CountdownTimer initialValue={0} targetValue={300} speed={400} />
             </Container>
             </Container>
           </Col>
        </Row> */}
        <Dates/>
      
       </Container>
      
  
  );
};

export default CountApp;
