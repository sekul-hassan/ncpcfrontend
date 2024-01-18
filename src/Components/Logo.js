import React from 'react';
import {Container} from "react-bootstrap";
import ju from '../Assets/Images/juLogoBlue.png';
import bcc from '../Assets/Images/bcc_logo.png';
import db from '../Assets/Images/digital-bangladesh.png';
import ict from '../Assets/Images/ICT_Division.png';
import tLogo from "../Assets/Images/ncpc_logo_transparent.png";
import cseLogo from "../Assets/Images/cse_logo.png";
function Logo(props) {
   
    return (
        <Container fluid="true" className="logoContainer">
           <div className="logoLeftDiv d-flex ms-0">
               <img className="logoLeftDivImg" src={tLogo} alt=""/>
               <img className="logoLeftDivImg ms-0" src={ju} alt=""/>
               <img className="cseLogo" src={cseLogo} alt=""/>
           </div>
         
            <div className="logoRightDiv">
               <img src={db} alt=""/>
               <img src={ict} alt=""/>
               <img src={bcc} alt=""/>
           </div>
        </Container>
    );
}

export default Logo;
