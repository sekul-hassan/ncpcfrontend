import React, {useContext} from 'react';
import {Button, Container} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileSignature} from "@fortawesome/free-solid-svg-icons";
import bkash from "../Assets/Images/bkash.jpg";
import FormContext from "./Context/FormContext";
import InfoDiv from "../MyComponents/InfoDiv";
import FormValidationAlert from "../MyComponents/FormValidataionAlert";
import FormSuccessAlert from "../MyComponents/FormSuccessAlert";
import {Navigate} from "react-router-dom";

function Payment({fourthCall,inputChange,valid,response,postDataToBackend,submit}) {
    const {data} = useContext(FormContext);
    return (
        <Container fluid="true" className=" mt-4 mb-3 responsiveRegi pt-4">
            <InfoDiv info="Payment Now"/>
            <h4 className="title mt-3 text-dark">To make your payment with bKash, follow the steps below:</h4>
            <h5 className="description mt-3">1. Go to your bKash Mobile Menu by dialing *247#</h5>
            <h5 className="description">2. Choose "Payment</h5>
            <h5 className="description">3. Enter the Merchant bKash Account Number <strong>(01941336337)</strong> you want to pay to</h5>
            <h4 className="description">4. Enter your amount you want to pay</h4>
            <h5 className="description">5. Enter your team name as a reference</h5>
            <h5 className="description">6. Now Enter your bKash Mobile Menu PIN to confirm.</h5>
            <h5 className="title mt-3"> Done! A confirmation will be provided once your payment is verified</h5>

            <div className="d-flex justify-content-center">
                <img className="PaymentImg" src={bkash} alt=""/>
            <br/>
            </div>
            <label htmlFor="x"><FontAwesomeIcon icon={faFileSignature} /> Transaction ID:</label>
            <input
                type="text"
                placeholder="bKash TransactionID"
                className="form-control"
                name="transaction"
                onChange={inputChange}
                value={!data.transaction===""?"":data.transaction}
            />

            {
                submit && !valid && (
                    <div className="mt-4">
                        <FormValidationAlert info="Please fill out all the fields."/>
                    </div>
                )
            }

            {
                valid && !response && (
                    <div className="mt-3">
                        <FormValidationAlert info="Loading..." gradient='linear-gradient(45deg, #1a237e 30%, #283593 90%)'/>
                    </div>
                )
            }

            {
                valid && response==="Team already exist please change your team name" && (
                    <div className="mt-4">
                        <FormValidationAlert info={response}/>
                    </div>
                )
            }
            {
                valid && response==="Registration Successful" && (
                    <div className="mt-4">
                        <FormSuccessAlert info={response}/>
                        <Navigate to="/status"/>
                    </div>
                )
            }

            <div className="d-flex position-relative">
                <Button className="backBtn" onClick={fourthCall} >Back</Button>
            </div>
            <div className="text-center">
                <button
                    className="submitBtn btn btn-success"
                    onClick={postDataToBackend}
                    // disabled={registrationOff}
                >
                    Submit
                </button>
            </div>
        </Container>
    );
}

export default Payment;
