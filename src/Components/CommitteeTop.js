import React from 'react';
import {Container} from "react-bootstrap";
import vc from "../Assets/Images/juVC.jpg";

function CommitteeTop(props) {
    return (
        <Container fluid="true" className="text-center p-3">
            <div className="vcDiv">
                <img src={vc} alt=""/>
            </div>
            <div className="committeeTextDiv mt-2">
                <h4 className="title text-white text-uppercase">vc ju</h4>
            </div>
        </Container>
    );
}

export default CommitteeTop;