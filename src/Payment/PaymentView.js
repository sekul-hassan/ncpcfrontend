import React from 'react';
import {Container} from "react-bootstrap";
import bks from "../Assets/Images/bkashLogo.png"

function PaymentView({authenTicate}) {
    return (
        <Container fluid="true" className="text-center">
            <img className="bkashLogo" src={bks} alt=""/>
            <div className="pauUpDiv mb-3">
                <button className="payBtn" onClick={authenTicate}>Pay Now</button>
            </div>
        </Container>
    );
}

export default PaymentView;
